import { MobileAppBar } from '../section/MobileAppBar';
import ProductSlide from '../components/ProductSlide';
import React, { useContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import NavBar from '../section/NavBar';
import Button, { GrayBgButton } from '../components/Buttons';
import { BagContext } from '../context/BagContext';

const ProductView = () => {
    
   
    const { productId } = useParams();
    const {Productsjson , addToCart } = useContext(BagContext)
    const productInfo=Productsjson.find(p=>p.id.toString()==productId.toString())

    return (
      <>
        {/* for crossplatform appbar */}
          { isMobile ? <MobileAppBar  appbarTitle={"Product"}  withBackArrow={true} ></MobileAppBar> : <NavBar/>}

        {/* product overview infos */}
        <div className='flex justify-center items-center max-sm:mt-20 max-sm:mb-20 md:mt-20 md:mb-10 lg:mt-0 pt-10 lg:mb-0'>
          <div className={`flext justify-center items-center flex-row  w-200 max-sm:w-full max-sm:mx-2 md:mt-10 lg:m-0`}>
            <div className='flex flex-col text-center justify-center items-center'>

              <div className='w-80 p-5 max-sm:mt-20 mt-0 lg:w-150'>
                <ProductSlide image={productInfo.image}/>
              </div>

              <div className='flex justify-start items-start w-150 max-sm:w-full max-sm:px-3'>

                  <div className="">
                    
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-[20px] text-start">{productInfo.title}</h5>
                    <p className="mb-3 text-xl max-sm:text-md text-gray-700 dark:text-gray-400 font-bold text-start">{`₹ ${productInfo.price}`}</p>
                    <p className="mb-2 mt-4 font-bold text-black dark:text-black text-start text-1xl">Description</p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-start">{productInfo.description}</p>

                   

                  </div>
              </div>
               <div className='mt-8 flex flex-col sm:flex-row justify-between gap-4'>
                      <button onClick={()=>addToCart(productId)} className='border flex gap-4 border-black rounded-lg  w-50 p-2 mb-2'>
                       
                        <p className='font-semibold ml-5'>Add to Cart</p>
                         <img src="/icons/cart.svg" width={30} height={30} alt="" />
                      </button>
                      <Button text={"Buy Now"} className={`bg-black rounded-lg text-white w-50 p-2 mb-2`}/>
                    </div>

            </div>
            
          </div>
        </div>
      </>
      
      
    )
}

export default ProductView
