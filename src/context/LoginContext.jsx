import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'


export const LoginContext=createContext()

export const LoginContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    // const  { setCartCount } = useContext(CartContext)
    const navigateTo=useNavigate()

    const login=async()=>{
        console.log("on login");
        
        try{
            const res=await axios.get('http://127.0.0.1:8000/auth/user')
            if (res){
                window.location.href=res.data.login_url
            }
            else return false
        }
        catch (e){
            console.error("Error Login : ",e);
            return false
        }
    }

    const logout=async()=>{
        console.log("on logout");
        
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        Cookies.remove('user_name');
        Cookies.remove('user_profile');
        Cookies.remove('role')

        // setCartCount(0)

        setIsLoggedIn(false)
    }

    const getLoginCredentials=async({user_token,user_name,user_profile})=>{
        try{
            const res=await axios.get(`http://127.0.0.1:8000/auth/token/both?token=${user_token}`);
            console.log("Credentials : ",res)
            if (res.status==200){
                Cookies.set("access_token",res.data.access_token);
                Cookies.set('refresh_token',res.data.refresh_token);
                Cookies.set('user_name',user_name)
                Cookies.set('user_profile',user_profile)
                Cookies.set('role',res.data.role)
                setIsLoggedIn(true)
                
            }
            else{
                console.warn("Something went wrong please sigin in again ! ");
            }

        }
        catch (e){
            console.error("Something went wrong please sigin in again ! ",e);
        }finally{
            navigateTo('/',{'replace':true})
            console.log("finally block");
            
        }
    }

    const checkIsUserLoggedIn=async()=>{
            if (
                Cookies.get("access_token") &&
                Cookies.get('refresh_token') &&
                Cookies.get('user_name')
            ){

                setIsLoggedIn(true)
            }
            else{
                await logout()
            }
    }

    useEffect(()=>{
        checkIsUserLoggedIn()
    })

    const values={login,logout,getLoginCredentials,checkIsUserLoggedIn,isLoggedIn,setIsLoggedIn}

    return (
        <LoginContext.Provider value={values}>
            {props.children}
        </LoginContext.Provider>
    )
}
