import { NetworkCalls } from '../components/Network'
import React, { createContext, useContext, useState } from 'react'



export const ProductContext=createContext()

export const ProductContextProvider = (props) => {
    const [products,setProducts]=useState({allProducts:[],filteredProducts:[]})
    const getProducts=async ()=>{
            try{
                const res=await NetworkCalls({method:'GET',path:'/products'})
    
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

    const values={getProducts,setProducts,products}

    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}
