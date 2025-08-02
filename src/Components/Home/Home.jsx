import React, { useState ,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

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
            <Navbar 
            handleScroll={handleScroll}
            setSearchTerm={setSearchTerm}
            isScrolled={isScrolled}
            />

            <Banner/>

            <Products searchTerm={searchTerm}/>
    </div>
  )
}

export default Home
