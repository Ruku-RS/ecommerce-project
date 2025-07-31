import React, { useState } from 'react'
import ProductList from './Product'
import { GoHeartFill } from 'react-icons/go';

const Products = () => {

const categories = ['All', 'Mens', 'Womens', 'Kids', 'New Arrivals', 'On Sale'];
const [activeTab, setActiveTab] = useState('All')
const renderProducts = ProductList.map(product=>{
    return(
        //Card
        <div>
            <div>
                <button className='text-3xl text-zinc-300 '>
                    <GoHeartFill/>
                </button>
                <span className='bg-red-600 px-3 py-1 text-white'> Sale </span>
                
                <div>
                    <h3>{product.name}</h3>
                </div>
            </div>
        </div>
    )
})

  return (
    <section className='max-w-[1300px] mx-auto px-12 py-10'>
        {/* Tabs */}
        <div className='flex gap-3 justify-center items-center mt-8'>
            {
                categories.map(category=>{
                    return(
                        <button key={category} 
                        className={`px-8 py-2 rounded-full text-lg cursor-pointer ${activeTab === category ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-800'}`}
                        onClick={()=>setActiveTab(category)}>
                            {category}
                        </button>
                    )
                })
            }
        </div>

        {/* Product Listing */}
        <div>
            {renderProducts}
        </div>
    </section>
  )
}

export default Products
