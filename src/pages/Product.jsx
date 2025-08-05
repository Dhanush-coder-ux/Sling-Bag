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
      <div className=' grid grid-cols-4  max-sm:grid-cols-2  gap-4 mt-20 mx-2 md:mx-8 items-center justify-center min-h-screen'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
        
      </>
    )
}
