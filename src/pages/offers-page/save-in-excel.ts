import * as XLSX from "xlsx";
import { Offer } from "~/pages/offers-page/offers-page-container";
import { saveAs } from "file-saver";
import dayjs from "dayjs";

export const exportToExcel = (offers: Offer[]) => {
  const data = offers.map((offer) => ({
    "Offer ID": offer.id,
    "Customer Name": offer.customerName,
    "Price (€)": offer.price,
    "Main Services": offer.mainServices.join(", "),
    "Created At": dayjs(offer.created_at).format("DD.MM.YYYY HH:mm"),
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Offers");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(dataBlob, `offers.xlsx`);
};
