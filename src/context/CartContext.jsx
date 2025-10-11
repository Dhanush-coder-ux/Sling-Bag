import Cookies from 'js-cookie';
import { useNetWorkCalls } from '../components/Network';
import { TruckElectric, UndoIcon } from 'lucide-react';
import React, { createContext, useContext, useEffect, useState } from 'react'



export const CartContext=createContext();


export const CartContextProvider=(props)=>{
    const [cartCount,setCartCount]=useState(0)
    const [userCart,setUserCart]=useState([])
    const {NetWorkCalls}=useNetWorkCalls()

    const addToCart=async({productId,ProductCurCartCount})=>{
        try{
            const res=await NetWorkCalls({method:'post',path:'/user/cart',data:{product_id:productId,quantity:ProductCurCartCount+1}})
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
            const res=await NetWorkCalls({method:'post',path:'/user/cart',data:{product_id:productId,quantity:ProductCurCartCount-1}})
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

    const deleteCartProduct=async({productId})=>{
        try{
            const res=await NetWorkCalls({method:'delete',path:`/user/cart?product_id=${productId}`})
            if (res){
                await getUserCart()
                await getUserCartCount()
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
            const res=await NetWorkCalls({method:'get',path:'/user/cart'})
            if (res){
                console.log("user carts from network :",res.user_carts);
                
                setUserCart(res.user_carts)
                sessionStorage.setItem('userCart',JSON.stringify(res.user_carts))
            }
        }
        catch (e){
            console.error("Error Geting user cart count : ",e);
            return false  
        }
    }

    const getUserCartCount=async ()=>{
        try{
            if (Cookies.get('access_token')==undefined || Cookies.get('refresh_token')==undefined){
                setCartCount(0)
            }
            const res=await NetWorkCalls({method:'get',path:'/user/cart/count'})
            if (res){
                setCartCount(res.cart_count)
            }
        }
        catch (e){
            console.error("Error Geting user cart count : ",e);
            return false  
        }
    }

    useEffect(() => {
        getUserCartCount();
    }, []);

    const values={addToCart,removeToCart,getUserCartCount,getUserCart,deleteCartProduct,userCart,setUserCart,cartCount,setCartCount}
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}
