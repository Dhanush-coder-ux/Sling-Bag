import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import { BagContext } from '../context/BagContext'
import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../section/NavBar';
import { isDesktop, isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { FavouriteProductCard } from '../components/ProductCard';

const Cart = () => {
  const { Productsjson,rupees,cartItems,} = useContext(BagContext);
  const [cartData,setCartData ]= useState([]);

useEffect(() => {
  if (!cartItems || !Productsjson) return;

  const tempdata = Object.entries(cartItems).map(([key, quantity]) => {
    const product = Productsjson.find(p => p.id.toString() === key.toString());
    if (product) {
      return { ...product, quantity };
    }
    return null;
  }).filter(Boolean); // removes nulls

  console.log('tempdata:', tempdata);
  setCartData(tempdata);
}, [cartItems, Productsjson]);

  return (
    <>
      { isMobile ? <MobileAppBar  appbarTitle={"Cart"}  withBackArrow={true} ></MobileAppBar> : <NavBar/>}
      <div className='lg:pt-5 '>
        {
          isDesktop &&
          <div className='flex justify-center items-center mb-10'>
            <Title text1={'Your'} text2={'Cart'} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"} />
          </div>
        }

        {
          cartData.length>0 ?
            <div className={`${cartData.length>1? 'grid lg:grid-cols-2' : 'grid lg:grid-cols-1'} space-y-3.5 space-x-3.5 place-items-center lg:mt-10 mx-8 max-sm:mx-2 max-sm:mt-20 max-sm:mb-20 md:mt-20 md:mb-20`}>
              {
                cartData.map((value)=>(
                  <FavouriteProductCard key={value.id} product={{id:value.id,title:value.title,description:value.description,price:value.price,images:value.image,quantity:value.quantity}}></FavouriteProductCard>
                ))
              }
            </div>
          :  <div className='flex justify-center items-center text-amber-700 font-bold text-3xl max-sm:mt-20'>
                <span >Your Cart Is Empty </span>
              </div>
        }
      </div>
    </>
 
  )
}

export default Cart
