import React, { useState } from "react";

const CheckOut = (props) => {
  const { quantity, totalCost } = props;

  const [order, setOrder] = useState({
    orderId: 0,
    orderStatus: "string",
    paymentMethod: "online-payment",
    userId: 4,
  });

  const placeOrder = () => {
    
  };

  return (
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items </span>
        <span className="font-semibold text-sm uppercase">{quantity}</span>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>&#8360; {totalCost}</span>
        </div>
        <button
          onClick={placeOrder}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
