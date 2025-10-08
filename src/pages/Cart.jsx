import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../section/NavBar';
import { isDesktop, isMobile } from 'react-device-detect';
import { CartProductCard } from '../components/ProductCard';
import  Button  from '../components/Buttons';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const rupees = "₹"
  const { getUserCart,userCart } = useContext(CartContext)
  const [isLoading,setLoading]=useState(true);
  const totalAmount = userCart.reduce((sum, p) => sum + (p.total_price || 0), 0);
  const totalQuantity= userCart.reduce((sum, p) => sum + (p.quantity || 0), 0);

  const navigateTo=useNavigate()

  useEffect(() => {
    setLoading(true)
    getUserCart()
    setLoading(false)
    
  },[]);

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
          isLoading ? 
          <div className='flex justify-center items-center text-black font-bold text-3xl max-sm:mt-20 md:mt-20'>
                <span >Loading...</span>
          </div>
          : userCart.length>0 ?
          <div>
            <div className='flex justify-center items-center max-sm:mt-20 md:mt-20 lg:mt-10'>
                <h1 className={`font-bold `}>Tot Amount : {rupees} {totalAmount}</h1>
                
            </div>
            
            <div className={`${userCart.length>1? 'grid lg:grid-cols-2' : 'grid lg:grid-cols-1'} space-y-3.5 space-x-3.5 place-items-center lg:mt-5 mx-8 max-sm:mx-2 max-sm:mt-5 max-sm:mb-20 md:mt-5 md:mb-20`}>
              {
                userCart.map((value)=>(
                  <CartProductCard key={value.product_id} product={{id:value.product_id,title:value.title,description:value.description,price:value.price,images:value.image_urls,quantity:value.quantity}}></CartProductCard>
                ))
              }
            </div>
            <div className='fixed w-full lg:bottom-0 max-sm:bottom-15 md:bottom-15 flex justify-center items-center'>
              <div>
                  <Button text={'Proceed To CheckOut'} className={`bg-black rounded-lg text-white w-150 p-2 mb-2 text-center max-sm:w-100`} onClick={()=>navigateTo('/place-order')} />
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
