/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-16 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>

        {/* Headings Row */}
        <div className="hidden lg:flex justify-between mt-8 px-4">
          <h1 className="text-lg font-semibold w-1/3">Product</h1>
          <h1 className="text-lg font-semibold w-1/3 text-center">Quantity</h1>
          <h1 className="text-lg font-semibold w-1/3 text-right">Total</h1>
        </div>

        {/* Product Section */}
        <div className="mt-4">
          {/* First Product Row */}
          <div className="flex justify-between items-center border-2 p-4 mb-4">
            {/* Product Details */}
            <div className="flex items-center w-1/3">
              <img
                src="/Product1.png"
                alt="Product 1"
                className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="ml-6">
                <h1 className="text-base sm:text-lg font-medium">
                  Graystone vase
                </h1>
                <p className="text-sm mt-2">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
                <p className="mt-2 text-base font-semibold">£85</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="w-1/3 text-center">
              <p className="text-lg font-medium">1</p>
            </div>

            {/* Total */}
            <div className="w-1/3 text-right">
              <p className="text-lg font-medium">£85</p>
            </div>
          </div>

          {/* Second Product Row */}
          <div className="flex justify-between items-center border-2 p-4 mb-4">
            {/* Product Details */}
            <div className="flex items-center w-1/3">
              <img
                src="/Product2.png"
                alt="Product 2"
                className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="ml-6">
                <h1 className="text-base sm:text-lg font-medium">
                  Basic white vase
                </h1>
                <p className="text-sm mt-2">
                  Beautiful and simple, this is one for the classics.
                </p>
                <p className="mt-2 text-base font-semibold">£85</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="w-1/3 text-center">
              <p className="text-lg font-medium">1</p>
            </div>

            {/* Total */}
            <div className="w-1/3 text-right">
              <p className="text-lg font-medium">£85</p>
            </div>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">
            Subtotal
          </h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£170</h1>
          <p className="text-sm mt-4">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
