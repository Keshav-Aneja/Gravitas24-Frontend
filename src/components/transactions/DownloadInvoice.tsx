import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePdf = async (data: any, user: any) => {
  const element = document.createElement("div");
  element.innerHTML = `
    <div id="pdf-content" style="width: 210mm; height: 297mm; padding: 20mm; font-family: Arial, sans-serif;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20mm;">
        <img src="./vitLogo.png" alt="VIT Logo" style="width: 180px; height: auto;" />
        <img src="./GravitasDark.png" alt="Gravitas Logo" style="width: 180px; height: auto;" />
      </header>
      <section style="font-size: 12px; width:100;">
        <h1 style="font-size: 18px; font-weight: bold;">Invoice Receipt</h1>
        <p style="margin-bottom: 10mm;">Date: ${new Date().toLocaleString(
          "en-US",
          { hour12: false }
        )}</p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10mm; margin-bottom: 15mm;">
          <div>
            <h2 style="font-weight: bold;">Sold to:</h2>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phoneNumber}</p>
          </div>
          <div style="text-align: right;">
            <p><span style="font-weight: bold;">Transaction Number:</span> ${
              data.id
            }</p>
            <p><span style="font-weight: bold;">Transaction Date:</span> ${new Date(
              data.callback_transaction_date
            ).toLocaleString("en-US", { hour12: false })}</p>
          </div>
        </div>

        <p style="margin-bottom: 10mm;"><span style="font-weight: bold;">Customer Number:</span> ${
          user.id
        }</p>

        <h2 style="font-size: 14px; font-weight: bold; margin-bottom: 5mm;">Transaction Details:</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15mm;">
          <thead>
            <tr style="border: 1px solid black;">
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Event Name</th>
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Status</th>
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 2mm; border: 1px solid black;">${
                data.payment?.event_slot?.event.name
              }</td>
              <td style="padding: 2mm; border: 1px solid black;">${
                data.payment.status
              }</td>
              <td style="padding: 2mm; border: 1px solid black;">₹${
                data.payment.amount
              }</td>
            </tr>
          </tbody>
        </table>

        <div style="text-align: right; margin-bottom: 15mm;">
          <p><span style="font-weight: bold;">Subtotal:</span> ₹${
            data.payment.amount
          }</p>
          <p><span style="font-weight: bold;">Total (with Tax):</span> ₹${
            data.callback_amount
          }</p>
        </div>

        <h2 style="font-size: 14px; font-weight: bold; margin-bottom: 5mm;">Additional Info:</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15mm;">
          <thead>
            <tr style="border: 1px solid black;">
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Invoice Number</th>
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Reference Number</th>
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Transaction ID</th>
              <th style="text-align: left; padding: 2mm; border: 1px solid black; font-weight: bold;">Payment ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 2mm; border: 1px solid black;">${
                data.callback_invoice_no
              }</td>
              <td style="padding: 2mm; border: 1px solid black;">${
                data.callback_reference_no
              }</td>
              <td style="padding: 2mm; border: 1px solid black;">${
                data.callback_transaction_id
              }</td>
              <td style="padding: 2mm; border: 1px solid black;">${
                data.payment.id
              }</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer style="text-align: center; font-size: 12px; color: #666;">
        <a href="https://gravitas.vit.ac.in/" style="color: #0000FF; text-decoration: none;">https://gravitas.vit.ac.in</a>
      </footer>
    </div>
  `;

  document.body.appendChild(element);

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      width: 210 * 3.78,
      height: 297 * 3.78,
    });
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    pdf.addImage(
      canvas.toDataURL("image/jpeg"),
      "JPEG",
      0,
      0,
      210,
      297,
      "NONE"
    );
    pdf.save(`${data.callback_invoice_no}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    document.body.removeChild(element);
  }
};
