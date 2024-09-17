import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import images from "@/constants/images";
import ReactDOMServer from "react-dom/server";

const InvoiceContent = ({ data, user }: { data: any; user: any }) => (
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
        <h1 className="text-lg font-bold">Invoice Receipt</h1>
        <p className="mb-4">Date: {new Date().toLocaleString()}</p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <h2 className="font-bold">Sold to:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phoneNumber}</p>
          </div>
          <div className="text-right">
            <p className="flex flex-col items-end">
              <span className="font-semibold">Transaction Number:</span>{" "}
              <span className="text-xs">{data?.id}</span>
            </p>
            <p className="flex flex-col items-end">
              <span className="font-semibold">Transaction Date:</span>{" "}
              {new Date(data?.callback_transaction_date).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="mb-4">
          <span className="font-bold">Customer Number:</span> {user.id}
        </p>

        <h2 className="text-md font-semibold mb-4">Transaction Details:</h2>
        <table className="w-full mb-6 border border-black text-sm">
          <thead>
            <tr className="border border-black">
              <th className="text-left p-2 border font-semibold border-black">
                Event Name
              </th>
              <th className="text-left p-2 border font-semibold border-black">
                Status
              </th>
              <th className="text-left p-2 border font-semibold border-black">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-black">
                {data?.payment?.event_slot?.event?.name}
              </td>
              <td className="p-2 border border-black">
                {data?.payment?.status}
              </td>
              <td className="p-2 border border-black">
                ₹{data?.callback_amount || data?.payment?.amount}
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

        <h2 className="text-md font-semibold mb-4">Additional Info:</h2>
        <table className="w-full mb-6 border border-black text-sm">
          <thead>
            <tr className="border border-black">
              <th className="text-left p-2 border font-semibold border-black">
                Invoice Number
              </th>
              <th className="text-left p-2 border font-semibold border-black">
                Reference Number
              </th>
              <th className="text-left p-2 border font-semibold border-black">
                Transaction ID
              </th>
              <th className="text-left p-2 border font-semibold border-black">
                Payment ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-black">
                {data?.callback_invoice_no}
              </td>
              <td className="p-2 border border-black">
                {data?.callback_reference_no}
              </td>
              <td className="p-2 border border-black">
                {data?.callback_transaction_id}
              </td>
              <td className="p-2 border border-black">{data?.payment?.id}</td>
            </tr>
          </tbody>
        </table>
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
  </div>
);

export const generatePdf = async (data: any, user: any) => {
  console.log(data, user);

  const htmlString = ReactDOMServer.renderToString(
    <InvoiceContent data={data} user={user} />
  );

  // Create a temporary container and insert the rendered HTML
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container.firstChild as HTMLElement, {
      scale: 2,
    });
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
    pdf.save(`${data.callback_invoice_no}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    document.body.removeChild(container);
  }
};

export default generatePdf;
