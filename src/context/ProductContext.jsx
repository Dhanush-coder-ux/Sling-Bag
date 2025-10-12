import Cookies from 'js-cookie'
import { useNetWorkCalls } from '../components/Network'
import React, { createContext, useContext, useState } from 'react'



export const ProductContext=createContext()

export const ProductContextProvider = (props) => {
    const [products,setProducts]=useState({allProducts:[],filteredProducts:[]})
    const [productInfo,setProductInfo]=useState({})
    const {NetWorkCalls}=useNetWorkCalls()

    const getProducts=async ({setLoading})=>{
            try{
                setLoading(true)
                const res=await NetWorkCalls({method:'GET',path:'/products',ignoreCookie:true})
                setLoading(false)
                if (res) {
                    setProducts(
                        {
                            allProducts:res.products,
                            filteredProducts:res.products
                        }
                    )
                    
                    return true
                }
                else return false
            }
            catch (e){
                console.error("Error adding user address : ",e);
                return false
            }
            
        }
    
    const getProductInfo=async ({productId,setLoading})=>{
            try{
                setLoading(true)
                var path=`/products/${productId}`
                var ignoreCookie=true
                if (Cookies.get('access_token') && Cookies.get('refresh_token')){
                    path=`/products/${productId}?cart_info=true`
                    ignoreCookie=false
                }
                const res=await NetWorkCalls({method:'GET',path:path,ignoreCookie:ignoreCookie})
                setLoading(false)
                if (res) {
                    setProductInfo(
                        res.product
                    )
                    return true
                }
                else return false
            }
            catch (e){
                console.error("Error adding user address : ",e);
                return false
            }
            
        }

    const values={getProducts,getProductInfo,setProducts,products,setProductInfo,productInfo}

    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}
