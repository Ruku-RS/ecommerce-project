import React, { useState ,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
      const [isScrolled, setIsScrolled] = useState('false');

   useEffect(()=>{
    const changeNavbar =()=>{
        setIsScrolled(window.scrollY > 10)
    }

        window.addEventListener('scroll', changeNavbar);

   },[])

const handleScroll = ()=>{
    const section = document.getElementById('product-section');

    if(section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}

  return (
    <div>
            {/* Navbar */}
            <Navbar 
            handleScroll={handleScroll}
            setSearchTerm={setSearchTerm}
            isScrolled={isScrolled}
            />

            {/* Banner */}
            <Banner/>

            {/* Product */}
            <Products searchTerm={searchTerm}/>

            {/* Cart Tab */}
            <Cart/>

            {/* Wishlist Tab */}
            <Wishlist/>
    </div>
  )
}

export default Home
