import React from 'react'
import Sweater from '../../assets/sweater.png'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const Cart = () => {
  return (
    <div className='flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 left-auto w-[400px] border-l border-zinc-300 py-7 transform translate-x-full'>
    
     {/* Heading */}
      <div className='px-10'>
        <h3 className='text-3xl font-bold text-zinc-800 text-center'>
            Your Cart
        </h3>
      </div>

      {/* Cart Items */}
      <div className='flex-1'>
        <div className='flex items-center gap-3 bg-white px-5 py-1 border-y-1 border-zinc-300'>
            {/* Cart Image */}
            <div className='w-20 h-20 '>
                <img src={Sweater} className='w-full h-full object-contain'/>
            </div>

            {/* Product Detail */}
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h4 className='font-semibold text-zinc-800 text-lg'>Sweater</h4>
                    <button className='w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center mr-[27px]'>
                        <FaTrash/>
                    </button>
                </div>

                <div  className='flex justify-between'>
                    <span>
                        $0.00
                    </span>
                    <div className='flex gap-2'>
                        <button className='w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-700'>
                            <FaMinus/>
                        </button>
                        <span>
                            1
                        </span>
                        <button className='w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-700'>
                            <FaPlus/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Card Total */}
      <div className='px-10 border-y border-zinc-300'>
        <div className='flex justify-between pt-2'>
            <span className='text-zinc-800'>
                Subtotal
            </span>
            <span className='text-zinc-800'>   
                $0.00
            </span>
        </div>
        <div className='flex justify-between py-2'>
            <span className='text-zinc-800'>
                Shipping & Handling
            </span>
            <span className='text-zinc-800'>   
                $0.00
            </span>
        </div>
        <div className='flex justify-between py-2 border-t border-zinc-300'>
            <span className='text-blue-600 text-lg font-bold '>
                Order Total
            </span>
            <span className='text-blue-600 text-lg font-bold'>   
                $0.00
            </span>
        </div>
      </div>

      {/* Button */}
      <div className='flex gap-x-2 px-10 '>
        <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'>
            Close
        </button>
        <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'>
            Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
