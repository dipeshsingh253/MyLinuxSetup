import React from "react";

const CheckOut = (props) => {
  const {totalCOst} = props;

  return (
    <div id="summary" class="w-1/4 px-8 py-10">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">Items {quantity}</span>
      </div>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>$600</span>
        </div>
        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
