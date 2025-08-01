import React, { useState } from "react";
import ProductList from "./ProductList";
import { GoHeartFill } from "react-icons/go";

const Products = () => {
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = ProductList.filter(item=>{
    const matchesCategory = (activeTab === 'All') ||
    (activeTab === 'New Arrivals' && item.NewArrival) ||
    (activeTab === 'On Sale' && item.onSale) ||
    (activeTab === item.category)

    return matchesCategory;
  })

  const renderProducts = filteredItems.map((product) => {
    return (
      //Card
      <div className="bg-zinc-100 rounded-lg p-5 border-1 border-zinc-300 ">
        <div className="flex justify-between items-center">
          <button className="text-3xl text-zinc-300 ">
            <GoHeartFill />
          </button>
            <div>
                {
                    (product.onSale || product.NewArrival) && 
                    (
                        <span className={`px-3 py-1 text-white
                            ${product.onSale ? 'bg-red-600' : 'bg-green-600'}`}>
                            {product.onSale ? 'Sale' : 'New'}
                        </span>
                    )
                }
            </div>
        </div>
        
        {/* Product Image */}
        <div className="w-full h-[30vh]">
            <img src={product.image} />
        </div>
        
        {/* Product Detail */}
        <div className="text-center mt-3">
          <h3 className="text-[1.4rem] font-semibold ">
            {product.name}
          </h3>
          <div className="mt-1 mb-5">
            {
                product.onSale  &&
                (
                    <span className="text-zinc-600 font-semibold text-lg line-through mr-8">
                        ${product.oldPrice.toFixed(2)}
                    </span>
                )
            }
            <span className="text-red-600 font-semibold text-lg">${product.price.toFixed(2)}
            </span>
          </div>
          <button className="bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1300px] mx-auto px-12 py-10">
      {/* Tabs */}
        <div className="flex gap-3 justify-center items-center mt-8">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={`px-8 py-2 rounded-full text-lg cursor-pointer ${
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-800"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
        </div>

      {/* Product Listing */}
        <div className="grid grid-cols-4 gap-9 mt-12">
            {renderProducts}
        </div>
    </section>
  );
};

export default Products;
