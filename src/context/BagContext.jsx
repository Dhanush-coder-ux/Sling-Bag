import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const BagContext = createContext();

const BagContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);   
  

  const navigate = useNavigate();
  const rupees = "₹";
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  // ---------------- CART FUNCTIONS ----------------
  const addToCart = async (productId, productPrice,quantity) => {
    let cartData = structuredClone(cartItems);
    axios.post(`${backend_url}/user/cart`, { product_id: productId,quantity:cartData[productId]?cartData[productId]["count"]+1:1 });
    if (quantity!=null){
      cartData[productId]["count"] = quantity;
      cartData[productId]["totAmount"] = productPrice;
    }
    else if (cartData[productId]) {
      cartData[productId]["count"] += 1;
      cartData[productId]["totAmount"] += productPrice;
    } else {
      cartData[productId] = { count: 1, totAmount: productPrice };
    }
    setCartItems(cartData);
  };


  const removeToCart = async (productId, productPrice) => {
    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      cartData[productId]["count"] -= 1;
      cartData[productId]["totAmount"] -= productPrice;
    } else {
      cartData[productId] = { count: 0, totAmount: productPrice };
    }
    setCartItems(cartData);
  };

const getCartCount = () => {
  let count = 0;
  for (const key in cartItems) {
    count += cartItems[key]['count'];
  }
  return count;
};




  const getCart = async ({setCartData}) => {
    try {
      const res = await axios.get(`${backend_url}/user/cart`);
      console.log(res.data);
      // setCartItems(res.data.user_carts);
      setCartData(res.data.user_carts);``
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  // get cart info by product id
  const getCartInfoById = (productId) => {
    let cartData = structuredClone(cartItems);

    return cartData[productId]
      ? {
          count: cartData[productId]["count"],
          totAmount: cartData[productId]["totAmount"],
        }
      : null;
  };

  // ---------------- PRODUCTS FUNCTION ----------------
  const getProducts = async ({setFilterProduct,setLoading}) => {
    try {
      setLoading(true);
      const res = await axios.get(`${backend_url}/product`);
      const data = Array.isArray(res.data) ? res.data : res.data.products;
      setProducts(data || []);
      console.log(data)
      setFilterProduct(data||[]);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally{
      setLoading(false)
    }
  };



  // ---------------- CONTEXT VALUE ----------------
  const value = {
    rupees,
    cartItems,
    products,             
    setCartItems,
    addToCart,
    removeToCart,
    getCartCount,
    getCartInfoById,
    getProducts,    
    navigate,
    getCart
  };

  return (
    <BagContext.Provider value={value}>
      {props.children}
    </BagContext.Provider>
  );
};

export default BagContextProvider;
