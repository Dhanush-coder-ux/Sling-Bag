import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleSignIn } from "../section/NavBar";
import { NetworkCalls } from "../components/Network";

export const BagContext = createContext();

const BagContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]); 
  const [cartCount,setCartCount]=useState(0); 
  const [buttonName,setBtnName]=useState({'name':"Sign-In",'func':handleSignIn})
  const [latest,setLatest] = useState([])
  

  const navigate = useNavigate();
  const rupees = "₹";
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  // ---------------- CART FUNCTIONS ----------------
  const addToCart = async (productId,quantity) => {
    let cartData = structuredClone(cartItems);

    await axios.post(`${backend_url}/user/cart`, { product_id: productId,quantity:cartData[productId]?cartData[productId]["count"]+1:1 });
     
    if (productId) {
      cartData[productId]={'count':quantity || 1};
      setCartCount(cartCount+1 || 1)
      setCartItems(cartData);
    }
    
  };

  const addToCartLocally = async (productId,quantity) => {
    let cartData = structuredClone(cartItems);
     
    if (productId) {
      cartData[productId]={'count':quantity || 1};
      setCartItems(cartData);
    }
    
  };


  const removeToCart = async (productId, quantity) => {
    let cartData = structuredClone(cartItems);
    await axios.post(`${backend_url}/user/cart`, { product_id: productId,quantity:cartData[productId]?cartData[productId]["count"]-1:0 });
    if (productId) {
      cartData[productId]= {'count':quantity || 0};
      setCartCount(cartCount-1 || 0)
      setCartItems(cartData);
    } 
    
  };

  const getCartCount = () => {
    return cartCount;
  };

  const getCart = async ({setCartData,setLoading}) => {
    try {
      const res = await axios.get(`${backend_url}/user/cart`);
      console.log(res.data);
      setLoading(false);
      // setCartItems(res.data.user_carts);
      setCartData(res.data.user_carts);
      setProducts(res.data.user_carts || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const fetchCartCount = async () => {
    try {
      const res = await axios.get(`${backend_url}/user/cart/count`);
      console.log('response',res.cart_count);
      setCartCount(res.data.cart_count || 0);
    } catch (err) {
      console.error("Error fetching cart count:", err);
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

  const getLatestProducts = async () => {
    try {
      const res = await axios.get(`${backend_url}/product?latest=true`);
      const data = Array.isArray(res.data) ? res.data : res.data.products;
      setLatest(data || []);
      console.log(data)
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally{
      
    }
  };

  useEffect(()=>{
    getLatestProducts();
  },[])
  // ---------------- AUTHENTICATION FUNCTION ----------------
  const getBtnName=()=>{
    return buttonName;
  }

  const updateBtnName=({name,func})=>{
    setBtnName({'name':name,'func':func});
  }



  // ---------------- CONTEXT VALUE ----------------
  const value = {
    rupees,
    cartItems,
    products,             
    setCartItems,
    addToCart,
    addToCartLocally,
    removeToCart,
    getCartCount,
    getCartInfoById,
    getProducts,    
    navigate,
    getCart,
    fetchCartCount,
    getBtnName,
    updateBtnName,
    latest
  };

  return (
    <BagContext.Provider value={value}>
      {props.children}
    </BagContext.Provider>
  );
};

export default BagContextProvider;
