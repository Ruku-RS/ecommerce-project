import React from 'react'
import Sweater from '../../assets/sweater.png'


const Wishlist = ({activePanel}) => {
  return (
     <div className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 left-auto w-[400px] border-l border-zinc-300 py-7 transform transition-transform duration-300 translate-x-0
     ${activePanel === 'wishlist' ? 'translate-x-0' : 'translate-x-full'} `}>
        
         {/* Heading */}
          <div className='px-10'>
            <h3 className='text-3xl font-bold text-zinc-800 text-center'>
               Your Wishlist
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
                        <p>Date</p>
                    </div>
    
                    <div  className='flex justify-between'>
                        <span>
                            $0.00
                        </span>
                        <button className='bg-blue-600 text-white text-sm px-5 py-[5px] rounded-full active:bg-blue-700 cursor-pointer  '>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
          </div>
    
          
         
          {/* Button */}
          <div className='flex gap-x-2 px-10 '>
            <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'>
                Close
            </button>
            <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'>
                Clear All
            </button>
          </div>
        </div>
    )
  
}

export default Wishlist
