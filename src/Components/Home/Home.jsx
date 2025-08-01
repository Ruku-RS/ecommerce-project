import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');

const handleScroll = ()=>{
    const section = document.getElementById('product-section');

    if(section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}

  return (
    <div>
            <Navbar 
            handleScroll={handleScroll}
            setSearchTerm={setSearchTerm}
            />

            <Banner/>
            
            <Products searchTerm={searchTerm}/>
    </div>
  )
}

export default Home
