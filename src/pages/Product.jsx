import React, { Component, useState } from 'react'
import { MobileAppBar } from '../section/mob_appbar';
import { ProductCard } from '../components/product_card';
import { BlackBgButton, GrayBgButton} from '../components/Buttons';
import Button from '../components/Buttons';
import { GrayBgTextField } from '../components/custom_inputs';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import NavBar from '../section/NavBar';



export const ProductsPage = () => {
    const [nameValue,setNameValue]=useState("");
    const [phoneValue,setPhValue]=useState("");
    const [addressValue,setAddValue]=useState("");
    return (
      <>
     { isMobile ? <MobileAppBar  appbarTitle={"Home"}></MobileAppBar> : <NavBar/>}
      <div className='flex items-center justify-center min-h-screen'>
        
        <div className='w-100 border-b-blue-400 border-2 rounded-2xl'>
            {isMobile && <h1>hii</h1>}
            <GrayBgTextField placeholder={"Name"} value={nameValue} setValue={setNameValue} type={"text"}></GrayBgTextField>
            <GrayBgTextField placeholder={"Phone"} value={phoneValue} setValue={setPhValue} type={"number"}></GrayBgTextField>
            <GrayBgTextField placeholder={"Address"} value={addressValue} setValue={setAddValue} type={"text"}></GrayBgTextField>

            <Button onClick={()=>{console.log("hello")}} text={ "Place Order" } className='bg-black mx-3.5 text-center p-2' />
            <BlackBgButton text={ "Upload Logo/Image" } canHover={ true }></BlackBgButton>
            <div className='m-3.5'>
                <h1>Your name : {nameValue}</h1>
                <h1>Your PhoneNumber : {phoneValue}</h1>
                <h1>Your Address : {addressValue}</h1>
            </div>
        </div>
      </div>
        
      </>
    )
}
