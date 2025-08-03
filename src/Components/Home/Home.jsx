import React, { useState ,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import product from '../Products/ProductList'

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isScrolled, setIsScrolled] = useState('false');
    const [activePanel, setActivePanel] = useState(null);  
    const [cart, setCart] = useState([]);

   useEffect(()=>{
    const changeNavbar =()=>{
        setIsScrolled(window.scrollY > 10)
    }

        window.addEventListener('scroll', changeNavbar);

   },[])

//    Handle Scroll
const handleScroll = ()=>{
    const section = document.getElementById('product-section');

    if(section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}

// Cart and Wishlist ShowPanel function
const handlePanel = (tabName)=>{
    setActivePanel(prev=>(
        prev === tabName ? null : tabName
    ))
}

//Close Panel function
const handleClose = ()=> setActivePanel(null);

// AddToCart function
const addToCart = (product)=>{
   setCart([...cart, product])
}

  return (
    <div>
            {/* Navbar */}
            <Navbar 
            handleScroll={handleScroll}
            setSearchTerm={setSearchTerm}
            isScrolled={isScrolled}
            handlePanel={handlePanel}
            />

            {/* Banner */}
            <Banner/>

            {/* Product */}
            <Products 
            searchTerm={searchTerm}
            addToCart={addToCart}
            />

            {/* Cart Tab */}
            <Cart
            activePanel={activePanel}
            handleClose ={handleClose}
            cart={cart}
            />

            {/* Wishlist Tab */}
            <Wishlist
            activePanel={activePanel}
            handleClose ={handleClose}
            />
    </div>
  )
}

export default Home
