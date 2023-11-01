//For Add Item to Cart
export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product
  };
};

//For Delete Item to Cart
export const deleteItem = (product) => {
  return {
    type: "DELITEM",
    payload: product
  };
};

//For Add Price in Total
export const checkOutPrice = (product) => {
  return {
    type: "ADDPRICE",
    payload: product
  };
};

//For Delete Price in Total
export const deletPrice = (product) => {
  return {
    type: "DELETEPRICE",
    payload: product
  };
};
