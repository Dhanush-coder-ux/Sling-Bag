import { NetworkCalls } from '../components/Network';
import { TruckElectric } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react'



export const CartContext=createContext();


export const CartContextProvider=(props)=>{
    const [cartCount,setCartCount]=useState(0)
    const [userCart,setUserCart]=useState([])

    const addToCart=async({productId,ProductCurCartCount})=>{
        try{
            const res=await NetworkCalls({method:'post',path:'/user/cart',data:{product_id:productId,quantity:ProductCurCartCount+1}})
            if (res){
                setCartCount(prev=>prev+1)
                return true
            }
            else{
                return false
            }
        }catch (e){
            console.error("Error adding cart : ",e);
            return false
        }
    }

    const removeToCart=async({productId,ProductCurCartCount})=>{
        try{
            const res=await NetworkCalls({method:'post',path:'/user/cart',data:{product_id:productId,quantity:ProductCurCartCount-1}})
            if (res){
                setCartCount(prev=>prev-1)
                return true
            }
            else{
                return false
            }
        }catch (e){
            console.error("Error removing cart : ",e);
            return false
        }
    }
    
    const getUserCart=async ()=>{
        try{
            const res=await NetworkCalls({method:'get',path:'/user/cart'})
            if (res){
                setUserCart(res.user_carts)
            }
        }
        catch (e){
            console.error("Error Geting user cart count : ",e);
            return false  
        }
    }

    const getUserCartCount=async ()=>{
        try{
            const res=await NetworkCalls({method:'get',path:'/user/cart/count'})
            if (res){
                setCartCount(res.cart_count)
            }
        }
        catch (e){
            console.error("Error Geting user cart count : ",e);
            return false  
        }
    }

    const values={addToCart,removeToCart,getUserCartCount,getUserCart,userCart,setUserCart,cartCount,setCartCount}
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}
