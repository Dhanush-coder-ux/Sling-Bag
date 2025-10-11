import NavBar from '../section/NavBar';
import Title from '../components/Title';
import { MobileAppBar } from '../section/MobileAppBar';
import React, { useContext, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { OrderContext } from '../context/OrderContext';
import { NavLink } from 'react-router-dom';

const Orders = () => {
  const rupees = "₹"
  const { getOrders, userOrders } = useContext(OrderContext)

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className='max-sm:mb-20 mb-10'>
      {isMobile ? <MobileAppBar appbarTitle="Orders" withBackArrow={false} /> : <NavBar />}

      <div className="mt-5 mx-10 max-sm:mx-6 max-sm:my-15">
        <Title
          text1="My"
          text2="Orders"
          text1ClassName="font-bold text-[30px]"
          text2ClassName="font-bold"
          divClassName="mb-5"
        />

        {userOrders.length>0 ? userOrders?.map((order, orderIndex) => (
          <div key={orderIndex} className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

              {/* Order Info */}
              
              <div className="flex items-start gap-6">
                <div className="flex flex-wrap gap-4">
                  {order.products.map((item, index) => (
                    <NavLink to={`/product/${item.product_id}`} key={index}>
                    <div className="flex flex-col items-start bg-gray-50 p-4 rounded-lg shadow-md w-60 cursor-pointer">
                      <img
                        src={item.image_urls[0]}
                        alt={item.title}
                        className="w-32 h-32 object-cover rounded"
                      />
                      <h3 className="font-semibold text-lg text-black text-center mt-3 truncate max-w-[220px]">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 mt-1">Quantity: {item.quantity}</p>
                      <p className="text-gray-500">Price: {rupees}{item.price}</p>
                      <p className="text-gray-500">Total: {rupees}{item.total_price}</p>
                    </div>
                    </NavLink>
                  ))}
                </div>
              </div>
              

              {/* Status & Address */}
              <div className="flex flex-col gap-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="font-medium text-black">{order.status}</span>
                </div>
                <p><span className="font-semibold">Address:</span> {order.address}</p>
                <p><span className="font-semibold">Payment Method:</span> cod</p>
                <p><span className="font-semibold">Order Date:</span> {order.datetime.slice(0,10)}</p>

                <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))
        : <center><h1 className=' font-bold text-2xl'>No Orders Yet</h1></center>
      }
      </div>
    </div>
  );
};

export default Orders;
