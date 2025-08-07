import { MobileAppBar } from '../section/MobileAppBar';
import ProductSlide from '../components/ProductSlide';
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import NavBar from '../section/NavBar';
import { Productsjson } from '../constant';
import { coldGrey, jetBlack, platinum } from '../constant/ColorCodes';
import Button, { GrayBgButton } from '../components/Buttons';

const ProductView = () => {
    const { state } = useLocation();
    const isFav = state || false;
    const { productId } = useParams();
    const productInfo=Productsjson.find(p=>p.id.toString()==productId.toString());

    console.log(productInfo);

    return (
      <>
        {/* for crossplatform appbar */}
          { isMobile ? <MobileAppBar  appbarTitle={"Product"}  withBackArrow={true} withFavIcon={true} isFavourite={isFav}></MobileAppBar> : <NavBar/>}

        {/* product overview infos */}
        <div className='flex justify-center items-center max-sm:mt-20 max-sm:mb-20 md:mt-20 md:mb-10 lg:mt-0 lg:mb-0'>
          <div className={`flext justify-center items-center flex-row bg-gray-100 shadow-2xl rounded-2xl w-200 max-sm:w-full max-sm:mx-2 md:mt-10 lg:m-0`}>
            <div className='flex flex-col text-center justify-center items-center'>

              <div className='w-80 p-5 max-sm:mt-20 mt-0 lg:w-150'>
                <ProductSlide/>
              </div>

              <div className='flex justify-start items-start w-150 max-sm:w-full max-sm:px-3'>

                  <div className="">
                    
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-[20px] text-start">{productInfo.title}</h5>
                    <p className="mb-3 text-xl max-sm:text-md text-gray-700 dark:text-gray-400 font-bold text-start">{`₹ ${productInfo.price}`}</p>
                    <p className="mb-2 mt-4 font-bold text-black dark:text-black text-start text-1xl">Description</p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-start">{productInfo.description}</p>

                    <div className='flex flex-row justify-between max-sm:space-x-1 mt-10'>
                      <Button text={"Add to Cart"} className='bg-black text-white w-50 p-2 mb-2'></Button>
                      <Button text={"Customize"} className={`bg-black text-white w-50 p-2 mb-2`}></Button>
                    </div>

                  </div>
              </div>

            </div>
          </div>
        </div>
      </>
      
      
    )
}

export default ProductView
