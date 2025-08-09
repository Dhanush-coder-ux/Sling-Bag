import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import { BagContext } from '../context/BagContext';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../section/NavBar';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { Productsjson, rupees, cartItems } = useContext(BagContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!cartItems || !Productsjson) return;

    const tempdata = Object.entries(cartItems)
      .map(([key, quantity]) => {
        const product = Productsjson.find(
          (p) => p.id.toString() === key.toString()
        );
        if (product) {
          return { ...product, quantity };
        }
        return null;
      })
      .filter(Boolean);

    setCartData(tempdata);
  }, [cartItems, Productsjson]);

  return (
    <>
      {isMobile ? (
        <MobileAppBar appbarTitle={'Cart'} />
      ) : (
        <NavBar />
      )}

      <div className="pt-10 flex flex-col h-screen">
        {/* Title */}
        <div className="flex justify-center items-center mt-8 mb-4">
          <Title
            text1={'Your'}
            text2={'Cart'}
            text1ClassName={'font-bold text-[30px]'}
            text2ClassName={'font-bold'}
          />
        </div>

        {/* Scrollable container */}
        <div className="flex-1 overflow-y-auto px-2 pb-24">
          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full p-4 border-b border-gray-300"
            >
              <div className="flex items-center gap-4">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                </Link>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 py-3">
                    Price: {item.price}
                  </p>
                  <p className="text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-lg font-bold">
                <img
                  src="/icons/delete.svg"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
