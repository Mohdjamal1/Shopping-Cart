import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addItem,
  checkOutPrice,
  deletPrice,
  deleteItem
} from "../redux/actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  let totalPrice = useSelector((state) => state.checkOutReducer);

  //For Empty Cart
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  //for CheckOut card right side.
  const CheckOut = () => {
    return (
      <>
        <div className="card border-success mb-3" style={{ maxWidth: "30rem" }}>
          <div className="card-header bg-transparent border-success">
            Check Out List
          </div>
          <div className="card-body text-success">
            <p className="card-text">
              {cart &&
                cart.map((item) => (
                  <div key={item.id}>
                    <p>
                      {item.title.substring(0, 12)}... {item.price}x{item.qty}=
                      {item.price * item.qty}
                    </p>
                  </div>
                ))}
            </p>
          </div>
          <div className="card-footer bg-transparent border-success">
            Total price: $ {totalPrice}
            <NavLink to="/razorpay" className="btn btn-primary mt-4  mx-auto">
              Proceed To checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  //All Cart products left side.
  const ShowProducts = () => {
    const increase = (product) => {
      dispatch(addItem(product));
      dispatch(checkOutPrice(product));
    };
    const decrease = (product) => {
      dispatch(deleteItem(product));
      dispatch(deletPrice(product));
    };

    return (
      <>
        <div className="container mt-5">
          {cart &&
            cart.map((product) => {
              return (
                <>
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={product.image}
                          className="img-fluid rounded-start px-2 pt-2 pb-2"
                          alt="product"
                          style={{ maxWidth: "100px" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.price}</p>
                          <p className="card-text"></p>
                          <button onClick={() => decrease(product)}>-</button>
                          Qty: {product.qty}
                          <button onClick={() => increase(product)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  };

  //main Cart jsx
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>My Cart</h1>
          {cart.length === 0 ? emptyCart() : <ShowProducts />}
        </div>
        <div className="col-4 pt-5 ps-5">
          {cart.length === 0 ? <div>Continue shopping</div> : <CheckOut />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
