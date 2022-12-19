import React from "react";

const CartItem = () => {
  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <img
            class="h-24"
            src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm">Airpods</span>
          <span class="text-red-500 text-xs">Apple</span>
          <a
            href="#"
            class="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </a>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <span>3</span>
      </div>

      <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
      <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
    </div>
  );
};

export default CartItem;
