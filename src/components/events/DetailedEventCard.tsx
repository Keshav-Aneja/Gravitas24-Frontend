"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrCaretDown, GrGroup } from "react-icons/gr";
import { BiCaretDown } from "react-icons/bi";
import { getEventDetails } from "@/services/event.service";
import { eventType, slotType } from "@/constants/types/types";
import { cn } from "@/lib/utils";
import Cookie from "js-cookie";
import axiosInstance from "@/config/axios";
import { CreateTransactionResponse } from "@/constants/types/transaction";
import Scroller from "../common/Scroller";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import DetailedEventCardSkeleton from "./DetailedEventCardSkeleton";
import postHandler from "@/handlers/post_handler";
import { useRouter } from "next/navigation";
import { getProfileDetails } from "@/services/user.service";
import Button from "../common/Button";

const DetailedEventCard = ({
  id,
  setEventName,
  setLoading,
}: {
  id: string;
  setEventName?: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const [eventDetails, setEventDetails] = useState<eventType | null>(null);
  const startDate = eventDetails && new Date(eventDetails.startDate);
  const endDate = eventDetails && new Date(eventDetails.endDate);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slotData, setSlotData] = useState<slotType[] | null>([]);
  const [localLoad, setLocalLoad] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [dialogResolver, setDialogResolver] = useState<
    ((value: boolean) => void) | null
  >(null);

  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setLocalLoad(true);
        const eventDetails = await getEventDetails(id);
        setLoading(false);
        setLocalLoad(false);
        setEventDetails(eventDetails.data);
        setSlotData(eventDetails.slots);
        // setSelectedSlot(eventDetails.slots);
        // console.log(eventDetails.slots);
        if (eventDetails.slots[0].slotId) {
          const sortedSlots = eventDetails.slots.sort(
            (
              a: { startDate: string | number | Date },
              b: { startDate: string | number | Date }
            ) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          );
          setSelectedSlot(sortedSlots[0].slotId);
        }
        // console.log(eventDetails.slots[0].slotId);
        setEventName && setEventName(eventDetails.data.name);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        setLoading(false);
        setLocalLoad(false);
      }
    })();
  }, []);

  const handleDialogClose = useCallback(
    (shouldProceed: boolean) => {
      setIsOpen(false);
      if (dialogResolver) {
        dialogResolver(shouldProceed);
        setDialogResolver(null);
      }
    },
    [dialogResolver]
  );

  if (!eventDetails) {
    return null;
  }
  if (localLoad) {
    return <DetailedEventCardSkeleton />;
  }

  const waitForDialogClose = () => {
    return new Promise<boolean>((resolve) => {
      setDialogResolver(() => resolve);
      setIsOpen(true);
    });
  };

  const registerEvent = async () => {
    try {
      const user = await getProfileDetails();

      if (
        user.data.regNum == null &&
        eventDetails.scope?.toLocaleLowerCase() !== "internal only"
      ) {
        // Wait for the dialog to be closed and get the result
        const shouldProceed = await waitForDialogClose();
        if (shouldProceed) {
          await proceedWithRegistration();
        }
      } else {
        // Proceed with registration immediately if no dialog is needed
        await proceedWithRegistration();
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  const proceedWithRegistration = async () => {
    const token = Cookie.get("access_token");
    const payload = {
      event_id: eventDetails.id,
      event_slot_id: selectedSlot,
    };
    try {
      // const response = await postHandler("/registration/start", payload);
      const response = await axiosInstance.post("/registration/start", payload);
      const data = response.data as CreateTransactionResponse;
      const status = data.success;
      if (!status) {
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
        return;
      }
      if (data.redirect && data.redirect === true && data.link) {
        router.push(data.link);
        return;
      }
      if (data.data != null) {
        const transactionFormData = data.data;
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://events.vit.ac.in/events/GRV24/cnfpay";
        form.target = "_blank";
        for (const [key, value] of Object.entries(transactionFormData)) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value as string;
          form.appendChild(input);
        }
        document.body.appendChild(form);
        form.submit();
      } else {
        toast({
          title: "Success",
          description: data.message,
        });
      }
    } catch (err: any) {
      if (err.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const errorMessage =
          err.response.data.message ||
          "An error occurred. Kindly contact tech.gravitas@vit.ac.in.";

        toast({
          title: "Error",
          description: errorMessage, // Use the error message from the response
          variant: "destructive",
        });

        console.log(err.response.data, "Full error response");
      } else if (err.request) {
        // The request was made but no response was received
        console.log(err.request, "No response received from the server.");

        toast({
          title: "Error",
          description: "No response from the server. Please try again later.",
          variant: "destructive",
        });
      } else {
        // Something happened in setting up the request that triggered an error
        toast({
          title: "Error",
          description:
            err.message || "Kindly contact at tech.gravitas@vit.ac.in.",
          variant: "destructive",
        });
        console.log(err.message, "Request setup error");
      }
      console.log(
        err,
        "An error occured. Kindly contact at tech.gravitas@vit.ac.in."
      );
    }
  };

  return (
    <BorderBox className=" md:py-10 py-0 w-full  flex flex-col gap-8 px-0">
      <Dialog
        open={isOpen}
        onOpenChange={(open) => !open && handleDialogClose(false)}
      >
        <DialogContent className="border-2 border-primary">
          <DialogHeader className="flex flex-col gap-8">
            <DialogTitle>Hostel Accomodation</DialogTitle>
            <DialogDescription className="flex flex-col gap-4 justify-around my-4">
              Hostel need to allocated, contact xyz@gmail.com +91 xy
              <Button
                onClick={() => handleDialogClose(true)}
                className="px-4 py-2 border rounded"
              >
                Proceed to Registration
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="w-full   flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8 px-0">
        <div className="w-full md:w-[40%] relative ">
          <div className="bg-white h-5 w-[60%] --clip-shape-card-image-top absolute top-0 left-0 flex md:hidden items-center justify-center gap-2">
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
          </div>
          <Image
            className="w-full aspect-square border-[1px] border-black"
            src={eventDetails.display}
            alt=""
            width={1000}
            height={1000}
          />
          {eventDetails.scope?.toLocaleLowerCase() === "internal only" && (
            <p className="font-auxMono m-4 text-sm">
              **Not for External Participants
            </p>
          )}
        </div>
        <section className="--main flex flex-col font-auxMono w-full md:w-[60%] px-2 md:px-0">
          <h1 className="text-3xl md:text-4xl font-medium">
            {eventDetails.name}
          </h1>
          <p className="text-primary text-sm md:text-lg">{eventDetails.club}</p>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center gap-0 min-w-fit text-[1rem] md:text-xl">
            <MdOutlineCurrencyRupee size={20} />
            <p>
              {eventDetails.price}
              <span className="text-primary text-sm">(per person)</span>
            </p>
          </section>
          <section className="flex flex-col gap-2 text-sm md:text-[1rem] whitespace-pre-wrap mt-4">
            {eventDetails.description}
          </section>
          <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-16 mt-6">
            <ArrowBox className="w-full md:w-fit flex flex-col gap-1 md:block items-center justify-center text-black text-xs md:text-sm font-auxMono">
              <h1 className="text-secondary text-[1rem] md:text-lg font-semibold">
                VENUE
              </h1>
              {slotData?.map((slot, index) => (
                <h2 key={index} className="uppercase">
                  {slot?.venue}
                </h2>
              ))}
            </ArrowBox>
            <ArrowBox className="w-full flex md:w-fit flex-col gap-1 md:block items-center justify-center text-black text-xs md:text-sm font-auxMono">
              <h1 className="text-secondary text-[1rem] md:text-lg font-semibold">
                NO OF PARTICIPANTS PER TEAM
              </h1>
              <h2>{eventDetails.teamSize}</h2>
            </ArrowBox>
          </div>
          {slotData && (
            <ArrowBox className="text-black text-sm font-auxMono w-full flex flex-col items-center gap-0 md:gap-3 mt-6">
              <h1 className="text-secondary text-lg font-semibold">SLOTS</h1>
              <div className="w-full gap-1">
                <Scroller
                  uniqueName="slots"
                  className="auto-cols-[80%] md:auto-cols-[40%]  w-full mx-auto"
                >
                  {slotData
                    .sort(
                      (a, b) =>
                        new Date(a.startDate).getTime() -
                        new Date(b.startDate).getTime()
                    )
                    .map((slot, index) => (
                      <SlotBox
                        key={index}
                        data={slot}
                        setSlot={setSelectedSlot}
                        selectedSlot={selectedSlot}
                      />
                    ))}
                </Scroller>
              </div>
            </ArrowBox>
          )}
        </section>
      </div>
      <div className="w-full  flex items-center justify-end mt-0 font-auxMono md:px-6">
        {/* <span className="text-sm text-black flex items-center justify-center flex-grow">
          {eventDetails.name}
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center">
          <CiCalendar size={18} />
          {startDate && endDate && (
            <p>
              {startDate.getDate()}{" "}
              {startDate.toLocaleString("default", { month: "short" })}-
              {endDate.getDate()}{" "}
              {endDate.toLocaleString("default", { month: "short" })}
            </p>
          )}
        </span> */}
        {/* <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center">
          <GrGroup size={18} />
          <p>{eventDetails.teamSize}</p>
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-l-[1px] border-primary flex-grow justify-center">
          <MdOutlineCurrencyRupee size={18} />
          <p>{eventDetails.price}/-</p>
        </span>{" "} */}
        {/* <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center border-x-[1px] border-primary">
          <CiClock2 size={18} />
          {startDate && endDate && (
            <p>
              {startDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
              -{" "}
              {endDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          )}
        </span> */}
        <button
          className="text-white bg-primary h-full  p-4 w-full md:w-fit px-16"
          onClick={registerEvent}
        >
          REGISTER
        </button>
      </div>
    </BorderBox>
  );
};

export default DetailedEventCard;

function ArrowBox({
  children,
  className,
  invert,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cn("w-fit relative p-3 px-3 md:px-6", className)}>
      <BiCaretDown className="absolute w-4 h-4 top-0 left-0 -rotate-45" />
      <BiCaretDown className="absolute w-4 h-4 top-0 right-0 -rotate-45" />
      <GrCaretDown className="absolute w-3 h-3 bottom-0 right-0 rotate-[135deg]" />
      <GrCaretDown className="absolute w-3 h-3 bottom-0 left-0 rotate-[135deg]" />
      {children}
    </div>
  );
}
type SlotProps = {
  data: slotType;
  setSlot: Dispatch<SetStateAction<string>>;
  selectedSlot: string;
};
function SlotBox({ data, setSlot, selectedSlot }: SlotProps) {
  const startDate = new Date(data.startDate);
  // console.log(startDate, data.startDate);
  const endDate = new Date(data.endDate);

  function formatTimeTo12Hour(hours: number, minutes: number) {
    const period = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12; // Convert 0-23 hour format to 12-hour format
    return `${String(adjustedHours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")} ${period}`;
  }

  const startTime = formatTimeTo12Hour(
    startDate.getUTCHours(),
    startDate.getUTCMinutes()
  );
  const endTime = formatTimeTo12Hour(
    endDate.getUTCHours(),
    endDate.getUTCMinutes()
  );

  const startDateFormatted = `${String(startDate.getUTCDate()).padStart(
    2,
    "0"
  )}-${startDate.toLocaleString("default", {
    month: "short",
  })}`;
  const endDateFormatted = `${String(endDate.getUTCDate()).padStart(
    2,
    "0"
  )}-${endDate.toLocaleString("default", {
    month: "short",
  })}`;

  return (
    <button
      className={cn(
        "w-full px-2 py-2 border-[1px] border-black text-xs tracking-tighter hover:bg-primaryLight select-none",
        selectedSlot === data.slotId && "bg-primaryLight",
        data.totalEntries <= 0 && "bg-gray-300"
      )}
      onClick={() => {
        if (data.totalEntries <= 0) {
          toast({
            title: "Seats Full",
            description: "No available seats in the selected slot",
            variant: "destructive",
          });
        } else {
          setSlot(data.slotId);
        }
      }}
    >
      <p className="uppercase">
        {"// "}
        {data.venue}
      </p>
      {startTime}
      {", "}
      {startDateFormatted}
      {" - "}
      {endTime}
      {", "}
      {endDateFormatted}
      {data.isRegistrable ? (
        data.totalEntries > 0 ? (
          <p className="text-xs md:text-sm">
            Available Seats: {data.totalEntries}
          </p>
        ) : (
          data.totalEntries <= 0 && (
            <p className="text-xs md:text-sm">Seats Full</p>
          )
        )
      ) : (
        <p className="text-xs md:text-sm">~</p>
      )}
    </button>
  );
}
