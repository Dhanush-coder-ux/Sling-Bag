import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import { BagContext } from '../context/BagContext'
import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../section/NavBar';
import { isDesktop, isMobile } from 'react-device-detect';

import { CartProductCard } from '../components/ProductCard';

import  Button  from '../components/Buttons';


const Cart = () => {
  const { Productsjson,rupees,cartItems,navigate} = useContext(BagContext);
  const [cartData,setCartData ]= useState([]);
  const [cartTotAmount,setCartTotAmount]=useState(0);

useEffect(() => {
  setCartTotAmount(0)
  if (!cartItems || !Productsjson) return;

  const tempdata = Object.entries(cartItems).map(([key,value]) => {
    const product = Productsjson.find(p => p.id.toString() === key.toString());
    
    if (product) {
      setCartTotAmount(cartTotAmount=>cartTotAmount+=value.totAmount);
      return { ...product, quantity:value.count, totAmount:value.totAmount };
    }
    return null;
  }).filter(Boolean); // removes nulls

  console.log('tempdata:', tempdata);
  setCartData(tempdata);
}, [cartItems, Productsjson]);

  return (
    <>
      { isMobile ? <MobileAppBar  appbarTitle={"Cart"}   ></MobileAppBar> : <NavBar/>}
      <div className='lg:pt-5 '>
        {
          isDesktop &&
          <div className='flex justify-center items-center mb-10'>
            <Title text1={'Your'} text2={'Cart'} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"} />
          </div>
        }

        {
          cartData.length>0 ?
          <div>
            <div className='flex justify-center items-center max-sm:mt-20 md:mt-20 lg:mt-10'>
                <h1 className={`font-bold `}>Tot Amount : {rupees} {cartTotAmount}</h1>
                
            </div>
            <div className=' w-full flex justify-center items-center  max-sm:mt-20 md:mt-20 lg:mt-10'>
              <Button text={'Proceed To CheckOut'} className={`bg-black rounded-lg text-white w-150 p-2 mb-2 text-center max-sm:w-100`} onClick={()=>navigate('/place-order')} />
            </div>
            
            <div className={`${cartData.length>1? 'grid lg:grid-cols-2' : 'grid lg:grid-cols-1'} space-y-3.5 space-x-3.5 place-items-center lg:mt-5 mx-8 max-sm:mx-2 max-sm:mt-5 max-sm:mb-20 md:mt-5 md:mb-20`}>
              {
                cartData.map((value)=>(
                  <CartProductCard key={value.id} product={{id:value.id,title:value.title,description:value.description,price:value.price,images:value.image,quantity:value.quantity}}></CartProductCard>
                ))
              }
            </div>
            <div className='fixed w-full lg:bottom-0 max-sm:bottom-15 md:bottom-15 flex justify-center items-center'>
              <div>
                <Button text={"Order Now"} className={`bg-black rounded-lg text-white w-150 p-2 mb-2 text-center max-sm:w-100`}/>
              </div>
            </div>
          </div>
            
          :  <div className='flex justify-center items-center text-amber-700 font-bold text-3xl max-sm:mt-20 md:mt-20'>
                <span >Your Cart Is Empty </span>
              </div>
        }
      </div>
    </>
 
  )
}

export default Cart
