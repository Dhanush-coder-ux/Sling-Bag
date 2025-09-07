import { Link, NavLink } from "react-router-dom"
import Button from "../components/Buttons"
import { useContext, useEffect, useState } from "react"
import { BagContext } from "../context/BagContext"
import axios from "axios"



const NavBar = () => {
  const {getCartCount,navigate,fetchCartCount} = useContext(BagContext)
  const backend_url = import.meta.env.VITE_BACKEND_URL;



    const handleSignIn = async () => {
    try {
      // optional API check
    const link=await axios.get(`${backend_url}/auth/user`,
      
    );
      // ✅ after success, redirect
      window.open(link.data, "_self");
      console.log(link.data,link.headers);
      
    } catch (err) {
      console.error("Error checking user:", err);
    
    }
  };
  
  useEffect(()=>{
    fetchCartCount();
  },[])
  const count=getCartCount();

  return (
    <div >
       <div className="navbar">
      <Link to={'/'} className="text-2xl font-bold text-black">
        {/* <img src="" alt="" /> */}
        Sling Bag
      </Link>
      
      
      <div className={`bg-[#E5E5E5]  text-black text-lg font-semibold px-4 py-4 rounded-lg sm:flex gap-8 hidden text-medium text-medium`}>
        <NavLink className={'flex flex-col items-center'} to={'/'} >
            Home
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>
        <NavLink  className={'flex flex-col items-center'} to={'/collections'} >
            Product
            <hr className=" w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>
      
        <NavLink  className={'flex flex-col items-center'} to={'/know-us'} >
             Know Us
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>
        <NavLink  className={'flex flex-col items-center'} to={'/orders'} >
             Orders
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>


      </div>
      

        <div className="flex gap-8 text-medium text-xl max-sm:px-2 px-4 py-3">
            <div className="px-4 py-3" >
          
        <NavLink  className={'relative sm:flex hidden '} to={'/cart'} >
          <img src="/icons/carts.svg" width={30} height={30} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 aspect-square rounded-full text-white text-[8px]">{count>99 ? "99+" : count}</p>
        </NavLink>
       
        </div>
          <div>
             <Button text={'Sign-in'} onClick={handleSignIn} className="bg-black px-6 py-3"/>
          </div>
            
        </div>
      
    </div>
    </div>
   
  )
}

export default NavBar
