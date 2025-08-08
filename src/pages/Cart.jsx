import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import { BagContext } from '../context/BagContext'
import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../section/NavBar';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

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
       <div className='pt-10 '>
      <div className='flex justify-center items-center mb-10'>
        <Title text1={'Your'} text2={'Cart'} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"} />
      </div>

      <div className='flex justify-center items-center mt-4 flex-col'>
        {
          cartData.map( (item,index) => {
            return (
              <Link to={`/product/${item.id}`} key={index} className='flex justify-between items-center w-3/4 p-4 border-b border-gray-300'>
                <div className='flex items-center gap-4'>
                  <img src={item.image[0]} alt={item.title} className='w-20 h-20 object-cover' />
                  <div>
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <p className='text-gray-600 py-3'>Price: {(item.price)}</p>
                    <p className='text-gray-600'>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className='text-lg font-bold'>
                  <img src="/icons/delete.svg" width={30} height={30} className='cursor-pointer' alt="" />
                </div>
              </Link>
            )

          })
        }
      </div>
    </div>
    </>
 
  )
}

export default Cart
