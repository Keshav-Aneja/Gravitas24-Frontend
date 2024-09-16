import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import images from "@/constants/images";
import getHandler from "@/handlers/get_handler";
import { Payment } from "@/constants/types/registered";
import { MdOutlineFileDownload } from "react-icons/md";

export const DownloadInvoice = ({
  data,
  setOpen,
  user,
}: {
  data: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
}) => {
  const txnDate = new Date(data?.callback_transaction_date);

  console.log("data>>",data);

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
        pdf.save(`${data?.callback_invoice_no}`);
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
      <div className="bg-white w-[80%] md:w-auto md:h-[90vh] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2100] flex  flex-col md:flex-row">
        <div
          className="w-full aspect-[210/297] p-8 h-full flex flex-col gap-8 justify-between"
          id="pdf-content"
        >
          <header className="flex items-center justify-between w-full m-4">
            <Image
              src={images.vitLogo}
              alt=""
              className=" w-32 h-auto"
              width={300}
              height={200}
            />
            <Image
              src="/GravitasDark.svg"
              alt=""
              className=" w-32 h-auto"
              width={300}
              height={200}
            />
          </header>
          <section className="py-4 text-sm h-full">
            <h1 className="text-lg font-bold mb-4">Invoice Receipt</h1>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <h2 className="font-bold">Sold to:</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phoneNumber}</p>
              </div>
              <div className="text-right">
                <p className="flex flex-col items-start">
                  <span className="font-semibold">Transaction Number:</span>{" "}
                  <span className="text-xs">
                    {data?.callback_transaction_id ||
                      "5787dbab-9e14-4aea-869a-5e73515a490c"}
                  </span>
                </p>
                <p className="flex flex-col items-start">
                  <span className="font-semibold">Transaction Date:</span>{" "}
                  {txnDate.toLocaleString() || "12/09/2024"}
                </p>
              </div>
            </div>

            <p className="mb-4">
              <span className="font-bold">Customer Number:</span>{" "}
              {user.id}
            </p>

            <h2 className="text-md font-semibold mb-4">Transaction Details:</h2>
            <table className="w-full mb-6 border border-black text-sm">
              <thead>
                <tr className="border border-black">
                  <th className="text-left p-2 border font-semibold border-black">
                    Event Name
                  </th>
                  <th className="text-left p-2 border font-semibold border-black">
                    Event Start Date
                  </th>
                  <th className="text-left p-2 border font-semibold border-black">
                    Price
                  </th>
                  <th className="text-left p-2 border font-semibold border-black">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-black">
                    {data?.payment?.event_slot?.event?.name}
                  </td>
                  <td className="p-2 border border-black">
                    {new Date(
                      data?.payment?.event_slot?.start_time
                    ).toLocaleString()}
                  </td>
                  <td className="text-right p-2 border border-black">
                    ₹{data?.payment?.amount}
                  </td>
                  <td className="p-2 border border-black">
                    {data?.payment?.status}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-right mb-6">
              <p>
                <span className="font-semibold">Subtotal:</span> ₹
                {data?.payment?.amount}
              </p>
              <p>
                <span className="font-semibold">Total (with Tax):</span> ₹
                {data?.payment?.amount}
              </p>
            </div>

            {/* <h2 className="text-xl font-semibold mb-4">Additional Info:</h2>
            <table className="w-full mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2">Invoice Number</th>
                  <th className="text-left p-2">Reference Number</th>
                  <th className="text-left p-2">Transaction ID</th>
                  <th className="text-left p-2">Payment ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">{data?.callback_invoice_no}</td>
                  <td className="p-2">{data?.callback_reference_no}</td>
                  <td className="p-2">{data?.callback_transaction_id}</td>
                  <td className="p-2">{data?.payment?.id}</td>
                </tr>
              </tbody>
            </table> */}
          </section>
          <footer className="text-center text-sm text-gray-600">
            <a
              href="https://gravitas.vit.ac.in/"
              className="text-blue-600 hover:underline"
            >
              https://gravitas.vit.ac.in
            </a>
          </footer>
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
