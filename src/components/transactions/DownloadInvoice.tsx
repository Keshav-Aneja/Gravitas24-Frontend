import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import getHandler from "@/handlers/get_handler";
import { Payment } from "@/constants/types/registered";
import { MdOutlineFileDownload } from "react-icons/md";
export const DownloadInvoice = ({
  data,
  setOpen,
}: {
  data: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const txnDate = new Date(data?.callback_transaction_date);
  console.log("TXN::::", data);
  const generatePdf = async () => {
    const element = document.getElementById("pdf-content"); // Replace with your actual div ID
    if (element) {
      try {
        const canvas = await html2canvas(element, { scale: 4 });
        const pdf = new jsPDF();
        pdf.addImage(
          canvas.toDataURL("image/jpeg"),
          "JPEG",
          0,
          0,
          pdf.internal.pageSize.width,
          pdf.internal.pageSize.height,
          "NONE"
        );
        pdf.save("your-file-name.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
    } else {
      console.error("Element not found");
    }
  };
  // const handlePrint = () => {
  //   const printElement = document.querySelector(".--report-content");
  //   if (printElement) printElement.print();
  // };
  //   useEffect(() => {
  //     (async () => {
  //       if (savePdf && zoom === 5) {
  //         generatePdf();
  //         // setZoom(2);
  //         setSavePdf(false);
  //       }
  //     })();
  //   }, [savePdf, zoom]);

  return (
    <>
      <div
        className="w-full h-screen bg-black/40 fixed top-0 left-0 z-[2000] backdrop-blur-sm"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      <div className="bg-white w-[80%] md:w-auto md:h-[90vh] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2   z-[2100] flex  flex-col md:flex-row">
        <div className="w-full aspect-[210/297]" id="pdf-content">
          <header className="flex items-center justify-between w-full p-4 border-b-[2px] border-b-black/20">
            <Image
              src="/GravitasDark.svg"
              alt=""
              className=" w-40 h-auto"
              width={300}
              height={200}
            />
          </header>
          <div className="font-clash p-4">
            <h1 className="text-3xl font-semibold font-clash mb-4">
              Invoice{" "}
              <span className="text-sm">({data?.callback_invoice_no})</span>
            </h1>
            <h1 className="text-xl uppercase w-full">
              {data?.payment?.event_slot?.event?.name}
            </h1>
            <p className="text-xs text-nowrap md:text-[1rem]">
              {data?.payment?.event_slot?.event?.club}
            </p>
          </div>
          <div className="p-4">
            <table className="text-[0.4rem]  w-full font-clash">
              <thead className="pb-4 ">
                <th className="px-3">Transaction ID</th>
                <th className="px-3">Reference No.</th>
                <th className="px-3">Payment Mode</th>
                <th className="px-3">Payment Status</th>
                <th className="px-3">Transaction Date</th>
              </thead>
              <tbody>
                <tr className="w-full h-8">
                  <td className="text-center">
                    {data?.callback_transaction_id}
                  </td>
                  <td className="text-center">{data?.callback_reference_no}</td>
                  <td className="text-center">Online</td>
                  <td className="text-center first-letter:uppercase">
                    {data?.payment?.status}
                  </td>
                  <td className="text-center">{txnDate.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full p-4">
              <table className="font-clash text-[0.6rem] w-full">
                <tr>
                  <td>
                    Total AmountTotal Amount
                    <span className="hidden md:block text-[0.5rem]">
                      (*Inclusive of GST)
                    </span>
                  </td>
                  <td className="text-right font-bold">
                    Rs. {data?.payment?.amount}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <button
          onClick={generatePdf}
          className="bg-primary text-white px-4 py-1 md:mb-3 h-full flex flex-row md:flex-col items-center justify-center font-auxMono gap-4 md:gap-2"
        >
          <p>Download</p>
          <MdOutlineFileDownload size={26} />
        </button>
      </div>
    </>
  );
};
