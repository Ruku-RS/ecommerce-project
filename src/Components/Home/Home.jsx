import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

const Home = () => {

const handleScroll = ()=>{
    const section = document.getElementById('product-section');

    if(section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}

  return (
    <div>
            <Navbar handleScroll={handleScroll}/>
            <Banner/>
            <Products/>
    </div>
  )
}

export default Home
