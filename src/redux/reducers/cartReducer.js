const cart = [];
console.log(cart);

const cartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //check if Product is already exist.
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        //Increase the quantity.
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      //check only 1 product in Cart
      if (exist1.qty === 1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default cartReducer;
