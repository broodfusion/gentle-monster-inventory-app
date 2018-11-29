export const getProductInitialValues = obj => {
  return {
    BarcodeNo: obj.BarcodeNo || '',
    ItemName: obj.ItemName || '',
    Comments: obj.Comments || '',
    Type: obj.Type || '',
    Year: obj.Year || '',
    RetailPrice: obj.RetailPrice || '',
    ImageUrl: obj.ImageUrl || ''
  };
};
