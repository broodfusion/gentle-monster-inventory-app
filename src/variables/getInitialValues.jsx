export const getProductInitialValues = obj => {
  return {
    BarcodeNo: obj.BarcodeNo || "",
    ItemName: obj.ItemName || "",
    Status: obj.Status || "",
    Category: obj.Category || "",
    Year: obj.Year || "",
    QTY: obj.QTY || "",
    WMSItemName: obj.WMSItemName || "",
    ImageUrl: obj.ImageUrl || ""
  };
};
