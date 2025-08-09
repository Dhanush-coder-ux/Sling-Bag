import { createContext, useEffect, useState } from "react"
import { Productsjson } from "../constant"

export const BagContext = createContext()

 
const BagContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

    const rupees = '₹'
    const addToCart = async (productId,productPrice) => {
      let cartData = structuredClone(cartItems);

      if (cartData[productId]) {
        cartData[productId]['count'] += 1;
        cartData[productId]['totAmount']+=productPrice
      } else {
        cartData[productId] = {count:1,totAmount:productPrice};
      }
      setCartItems(cartData);
    }

    const removeToCart = async (productId,productPrice) => {
      let cartData = structuredClone(cartItems);

      if (cartData[productId]) {
        cartData[productId]['count'] -= 1;
        cartData[productId]['totAmount']-=productPrice

      } else {
        cartData[productId] = {count:0,totAmount:productPrice};
      }
      setCartItems(cartData);
    }

    const getCartCount = () => {
      let count = 0;
      for (const key in cartItems) {
        count += cartItems[key]['count'];
      }

      return count;
    }

    const getCartInfoById=(productId)=>{
      let cartData = structuredClone(cartItems);
      console.log(cartData);
      console.log(cartData[productId]);
      
      return cartData[productId]? {count:cartData[productId]['count'],totAmount:cartData[productId]['totAmount']} : null;
    }



    const value ={
        Productsjson,rupees,cartItems, setCartItems,addToCart,getCartCount,getCartInfoById,removeToCart
    }

  return (
    <BagContext.Provider value={value}>
        {props.children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
