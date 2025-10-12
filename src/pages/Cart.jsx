import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../section/NavBar';
import { isDesktop, isMobile } from 'react-device-detect';
import { CartProductCard } from '../components/ProductCard';
import Button from '../components/Buttons';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const Cart = () => {
  const rupees = '₹';
  const { getUserCart, userCart } = useContext(CartContext);
  const { setProductInfo } = useContext(ProductContext);
  const [isLoading, setLoading] = useState(true);
  const navigateTo = useNavigate();

  const totalAmount = userCart.reduce((sum, p) => sum + (p.total_price || 0), 0);
  const totalQuantity = userCart.reduce((sum, p) => sum + (p.quantity || 0), 0);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      await getUserCart();
      setProductInfo({});
      setLoading(false);
    };
    fetchCart();
  }, []);

  return (
    <>
      {isMobile ? <MobileAppBar appbarTitle="Cart" /> : <NavBar />}

      <div className="lg:pt-5">
        {isDesktop && (
          <div className="flex justify-center items-center mb-10">
            <Title
              text1="Your"
              text2="Cart"
              text1ClassName="font-bold text-[30px]"
              text2ClassName="font-bold"
            />
          </div>
        )}

        {/* 🔹 Loading Skeleton */}
        {isLoading ? (
          <div className="flex flex-col justify-center items-center mt-20 gap-8">
            <div className="w-64 h-6 bg-gray-300 rounded animate-pulse"></div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 mx-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex bg-white border border-gray-200 rounded-lg shadow-sm flex-row max-w-xl w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 animate-pulse"
                >
                  {/* Image skeleton */}
                  <div className="w-100 h-48 m-2 max-sm:w-60 max-sm:h-40 max-sm:m-1 bg-gray-300 rounded-xl"></div>

                  {/* Text section skeleton */}
                  <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="w-3/4 h-5 bg-gray-300 rounded mb-3"></div>
                    <div className="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-5/6 h-3 bg-gray-300 rounded"></div>
                  </div>

                  {/* Delete icon skeleton */}
                  <div className="p-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-72 h-10 bg-gray-300 rounded animate-pulse mt-10"></div>
          </div>
        ) : userCart.length > 0 ? (
          <>
            {/* 🔹 Cart Summary */}
            <div className="flex justify-center items-center max-sm:mt-20 md:mt-20 lg:mt-10">
              <h1 className="font-bold text-lg">
                Total Amount: {rupees} {totalAmount} ({totalQuantity} items)
              </h1>
            </div>

            {/* 🔹 Cart Items */}
            <div
              className={`${
                userCart.length > 1
                  ? 'grid lg:grid-cols-2'
                  : 'grid lg:grid-cols-1'
              } space-y-3.5 space-x-3.5 place-items-center lg:mt-5 mx-8 max-sm:mx-2 max-sm:mt-5 max-sm:mb-20 md:mt-5 md:mb-20`}
            >
              {userCart.map((value) => (
                <CartProductCard
                  key={value.product_id}
                  product={{
                    id: value.product_id,
                    title: value.title,
                    description: value.description,
                    price: value.price,
                    images: value.image_urls,
                    quantity: value.quantity,
                  }}
                />
              ))}
            </div>

            {/* 🔹 Checkout Button */}
            <div className="fixed w-full lg:bottom-0 max-sm:bottom-15 md:bottom-15 flex justify-center items-center bg-white/80 backdrop-blur-md py-3">
              <Button
                text="Proceed To Checkout"
                className={`bg-black rounded-lg text-white w-150 p-2 text-center max-sm:w-100`}
                onClick={() => navigateTo('/place-order')}
              />
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center text-amber-700 font-bold text-3xl max-sm:mt-20 md:mt-20">
            <span>Your Cart Is Empty</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
