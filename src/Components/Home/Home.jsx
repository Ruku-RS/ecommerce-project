import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import product from "../Products/ProductList";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlaced from "../OrderPlaced/OrderPlaced";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState("false");
  const [activePanel, setActivePanel] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const  [wishlist, setWishlist] = useState([]);


  // Total Calculations
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shippingFee = totalItems * 2;
  const orderTotal = subTotal + shippingFee;

  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", changeNavbar);
  }, []);

  //    Handle Scroll
  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cart and Wishlist ShowPanel function
  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  //Close Panel function
  const handleClose = () => setActivePanel(null);

  //Remove Item
  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  //QuantityIncrement
  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //QuantityDecrement
  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // AddToCart function
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item is already in the cart!");
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

//   Wishlist function
const addToWishlist = (product) =>{
    const isInWishlist = wishlist.some(item=> item.id === product.id);
    if(isInWishlist){
        setWishlist(wishlist.filter(item=> item.id !== product.id))
    }
    else{
        const addedDate = new Date().toLocaleDateString('en-GB');
        setWishlist([...wishlist, {...product, addedDate}]);
    }
    

}

  return (
    <div>
      {/* Navbar */}
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />

      {/* Banner */}
      <Banner />

      {/* Product */}
      <Products 
      searchTerm={searchTerm} 
      addToCart={addToCart} 
      addToWishlist={addToWishlist}
      wishlist={wishlist}
      />

      {/* Cart Tab */}
      <Cart
        activePanel={activePanel}
        handleClose={handleClose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subTotal={subTotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      {/* Wishlist Tab */}
      <Wishlist 
      activePanel={activePanel} 
      handleClose={handleClose} 
      wishlist={wishlist}
      />

      {/* Order Summary */}
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderPlaced={setOrderPlaced}
          setOrderSummary={setOrderSummary}
          setCart={setCart}
        />
      )}

      {/* Order Placed */}
      {
        orderPlaced &&
        (
            <OrderPlaced
            setOrderPlaced={setOrderPlaced}
            />
        )
      }
    </div>
  );
};

export default Home;
