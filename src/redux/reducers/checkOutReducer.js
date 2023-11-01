let totalPrice = 0;

const checkOutReducer = (state = totalPrice, action) => {
  let item = action.payload;
  switch (action.type) {
    case "ADDPRICE":
      return state + item.price;
    case "DELETEPRICE":
      return state - item.price;
    default:
      return state;
  }
};
export default checkOutReducer;
