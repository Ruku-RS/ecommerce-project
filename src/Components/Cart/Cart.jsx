import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({ activePanel, handleClose, cart, removeItem, quantityIncrement, quantityDecrement}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 left-auto w-[400px] border-l border-zinc-300 py-7 transform transition-transform duration-300 
    ${activePanel === "cart" ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Heading */}
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center">
          Your Cart
        </h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll">
        {cart.length === 0 ? (
          <p className="text-zinc-800 text-center"> Your cart is empty!</p>
        ) : (
          cart.map((product, index) => {
            return (
              <div
                className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300 
            ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
              >
                {/* Cart Image */}
                <div className="w-20 h-20 ">
                  <img
                    src={product.image}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Detail */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <button
                      className="w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center mr-[27px] cursor-pointer active:bg-red-700"
                      onClick={() => removeItem(product)}
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      {product.onSale && (
                        <span className="text-zinc-600 font-semibold text-lg line-through mr-5">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-700"
                      onClick={()=>quantityDecrement(product)}>
                        <FaMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-700"
                      onClick={()=>quantityIncrement(product)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )
        }
      </div>

      {/* Card Total */}
      <div className="px-10 border-y border-zinc-300">
        <div className="flex justify-between pt-2">
          <span className="text-zinc-800">Subtotal</span>
          <span className="text-zinc-800">$0.00</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800">Shipping & Handling</span>
          <span className="text-zinc-800">$0.00</span>
        </div>
        <div className="flex justify-between py-2 border-t border-zinc-300">
          <span className="text-blue-600 text-lg font-bold ">Order Total</span>
          <span className="text-blue-600 text-lg font-bold">$0.00</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex gap-x-2 px-10 ">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={handleClose}
        >
          Close
        </button>
        <button className={`text-white flex-1 h-[7vh] active:bg-blue-700 ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 cursor-pointer'}`}
        disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
