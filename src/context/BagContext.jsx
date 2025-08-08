import { createContext, useEffect, useState } from "react"
import { Productsjson } from "../constant"

export const BagContext = createContext()

 
const BagContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

    const rupees = '₹'
    const addToCart = async (productId) => {
      let cartData = structuredClone(cartItems);

      if (cartData[productId]) {
        cartData[productId] += 1;
      } else {
        cartData[productId] = 1;
      }
      setCartItems(cartData);
    }

    const getCartCount = () => {
      let count = 0;
      for (const key in cartItems) {
        count += cartItems[key];
      }

      return count;
    }



    const value ={
        Productsjson,rupees,cartItems, setCartItems, addToCart,getCartCount
    }

  return (
    <BagContext.Provider value={value}>
        {props.children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
