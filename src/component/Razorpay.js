import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button

const Razorpay = () => {
  const navigate = useNavigate();
  const totalAmt = useSelector((state) => state.checkOutReducer);

  function payment(e) {
    const options = {
      key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
      amount: totalAmt * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#000"
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
      handler: function (response) {
        alert(response.razorpay_payment_id + " Your Payment Successfull");
        navigate("/");
      },
      options: {
        checkout: {
          method: {
            netbanking: 0,
            card: 0,
            upi: 1,
            wallet: 0
          }
        }
      }
    };

    var rzpy1 = new window.Razorpay(options);
    rzpy1.open();
    e.preventDefault();
  }

  return (
    <div className="container mt-5">
      <h2 style={{ marginLeft: "35%" }}>Pay Through Online Mode</h2>
      <button
        id="rzp-button1"
        style={{ marginLeft: "50%" }}
        className="btn btn-success mt-3"
        onClick={(e) => payment(e)}
      >
        Pay
      </button>
      <button
        className="btn btn-secondary btn-sm mx-2 mt-3"
        onClick={() => navigate("/cart")}
      >
        cancel
      </button>
    </div>
  );
};

export default Razorpay;
