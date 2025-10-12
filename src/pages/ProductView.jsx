import { MobileAppBar } from '../section/MobileAppBar';
import ProductSlide from '../components/ProductSlide';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import NavBar from '../section/NavBar';
import { Counter } from '../components/Counter';
import { platinum } from '../constant/ColorCodes';
import { ProductContext } from '../context/ProductContext';
import Button from '../components/Buttons';

const ProductView = () => {
  const { productId } = useParams();
  const { productInfo, getProductInfo } = useContext(ProductContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      getProductInfo({ productId, setLoading });
    }
  }, [productId]);

  console.log("Product Info : ", productInfo, Object.keys(productInfo).length);

  return (
    <>
      {/* Navbar */}
      {isMobile ? (
        <MobileAppBar appbarTitle="Product" withBackArrow={true} />
      ) : (
        <NavBar />
      )}

      <div className="flex justify-center items-center max-sm:mt-15 max-sm:mb-20 md:mt-10 md:mb-10 lg:mt-0 lg:mb-10">
        {loading ? (
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-80 h-80 bg-gray-300 rounded-lg"></div>
            <div className="w-64 h-6 bg-gray-300 rounded"></div>
            <div className="w-40 h-6 bg-gray-300 rounded"></div>
            <div className="w-72 h-16 bg-gray-300 rounded"></div>
            <div className="flex gap-4 mt-4">
              <div className="w-24 h-10 bg-gray-300 rounded"></div>
              <div className="w-32 h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        ) : Object.keys(productInfo).length > 0 ? (
          <div className="flex justify-center items-center flex-row w-200 max-sm:w-full max-sm:mx-2 md:mt-10 lg:m-0">
            <div className="flex flex-col text-center justify-center items-center">
              <div className="w-80 p-5 mt-0 lg:w-150">
                <ProductSlide image={productInfo.image_urls} />
              </div>

              <div className="flex justify-start items-start w-150 max-sm:w-full max-sm:px-3">
                <div>
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-[20px] text-start">
                    {productInfo.title}
                  </h5>
                  <p className="mb-3 text-xl max-sm:text-md text-gray-700 dark:text-gray-400 font-bold text-start">{`₹ ${productInfo.price}`}</p>
                  <p className="mb-2 mt-4 font-bold text-black text-start text-1xl">Description</p>
                  <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-start">
                    {productInfo.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 max-sm:px-2 flex justify-between items-end gap-4 w-150 max-sm:w-full text-center">
                <Counter
                  key={productId}
                  productId={productId}
                  className="p-1"
                  productCurQuantity={productInfo.cart_quantity}
                />
                <Button
                  text="Customize"
                  className={`bg-[${platinum}] rounded-lg text-black w-50 p-2 mb-2 text-center`}
                />
              </div>
            </div>
          </div>
        ) : (
          <center>
            <h1 className="font-bold text-2xl">No Product Found</h1>
          </center>
        )}
      </div>
    </>
  );
};

export default ProductView;
