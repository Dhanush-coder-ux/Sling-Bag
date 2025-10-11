import { useNetWorkCalls } from '../components/Network'
import React, { createContext, useContext, useState } from 'react'
import { CartContext } from './CartContext'
import { useNavigate } from 'react-router-dom'



export const OrderContext=createContext()

export const OrderContextProvider = (props) => {
    const { setCartCount } = useContext(CartContext)
    const {NetWorkCalls}=useNetWorkCalls()
    const navigateTo=useNavigate();
    const [userOrders,setUserOrders] = useState([])
    const [userAddress,setUserAddress]=useState({
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        mobile_number:''
      })


    // for order address
    const addOrderAddress=async ()=>{
        try{
            const joinedAddress=`${userAddress.street}, ${userAddress.city}, ${userAddress.state}, ${userAddress.zipcode}, ${userAddress.country}`
            const res=await NetWorkCalls({method:'post',path:'/user/address',data:{address:joinedAddress,mobile_number:userAddress.mobile_number}})

            if (res){
                navigateTo('/place-order-next')
            }
            else return false
        }
        catch (e){
            console.error("Error adding order address : ",e);
            return false
        }
        
    }

    const getOrderAddress=async ()=>{
        try{
            const res=await NetWorkCalls({method:'get',path:'/user/address'})

            if (res) {
                setUserAddress(
                    {
                        street:res.street,
                        city:res.city,
                        state:res.state,
                        zipcode:res.zipcode,
                        country:res.country,
                        mobile_number:res.mobile_number
                    }
                )

                return true
            }
            else return false
        }
        catch (e){
            console.error("Error getting order address : ",e);
            return false
        }
        
    }


    // for orders
    const addOrder=async ()=>{
        
        try{
            const res=await NetWorkCalls({method:'post',path:'/order'})

            if (res) {
                setCartCount(0)
                navigateTo('/')
                return true
            }
            else return false
        }
        catch (e){
            console.error("Error adding orders : ",e);
            return false
        }
        
    }

    const getOrders=async ()=>{
        try{
            const res=await NetWorkCalls({method:'get',path:'/orders'})

            if (res) {
                setUserOrders(res)
            }
            else return false
        }
        catch (e){
            console.error("Error adding user address : ",e);
            return false
        }
        
    }


    const values={addOrderAddress,getOrderAddress,addOrder,getOrders,userAddress,setUserAddress,userOrders,setUserOrders}

    return (
        <OrderContext.Provider value={values}>
            {props.children}
        </OrderContext.Provider>
    )
}
