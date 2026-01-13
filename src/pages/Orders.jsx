import NavBar from '../section/NavBar';
import Title from '../components/Title';
import { MobileAppBar } from '../section/MobileAppBar';
import React, { useContext, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { OrderContext } from '../context/OrderContext';
import { NavLink } from 'react-router-dom';

const Orders = () => {
  const rupees = "₹";
  const { getOrders, userOrders } = useContext(OrderContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      await getOrders();
      setLoading(false);
    };
    fetchOrders();
  }, []);

  return (
<div className="bg-gray-50 min-h-screen max-sm:mb-20 mb-10">
  {isMobile ? (
    <MobileAppBar appbarTitle="Orders" withBackArrow={false} />
  ) : (
    <NavBar />
  )}

  <div className="mt-6 mx-10 max-sm:mx-4 max-sm:mt-16">
    <Title
      text1="My"
      text2="Orders"
      text1ClassName="font-bold text-3xl"
      text2ClassName="font-bold text-black"
      divClassName="mb-8"
    />

    {loading ? (
      /* Skeleton unchanged */
      <div className="flex flex-col gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 animate-pulse shadow"
          >
            <div className="flex gap-4">
              <div className="w-32 h-32 bg-gray-300 rounded-xl"></div>
              <div className="flex-1 space-y-3">
                <div className="h-5 w-40 bg-gray-300 rounded"></div>
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : userOrders.length > 0 ? (
      userOrders.map((order, orderIndex) => (
        <div
          key={orderIndex}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8"
        >
          {/* Order Header */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
            <p className="text-sm text-gray-500">
              Order Date: <span className="font-medium text-gray-800">
                {order.datetime.slice(0, 10)}
              </span>
            </p>

            <span className="px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
              {order.status}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products */}
            <div className="flex flex-wrap gap-6">
              {order.products.map((item, index) => (
                <NavLink
                  to={`/product/${item.product_id}`}
                  key={index}
                  className="group"
                >
                  <div className="bg-gray-50 p-4 rounded-xl w-56 shadow-sm hover:shadow-md transition">
                    <img
                      src={item.image_urls[0]}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <h3 className="font-semibold mt-3 text-sm truncate">
                      {item.title}
                    </h3>
                    <div className="text-xs text-gray-500 mt-2 space-y-1">
                      <p>Qty: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                      <p className="font-semibold text-gray-800">
                        Total: ₹{item.total_price}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* Order Info */}
            <div className="flex flex-col justify-between text-sm text-gray-700 w-full lg:w-80">
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Delivery Address:</span>
                  <br />
                  {order.address}
                </p>
                <p>
                  <span className="font-semibold">Payment:</span> Cash on Delivery
                </p>
              </div>

              <button className="mt-6 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Track Order
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
        <h2 className="text-2xl font-bold text-black">No Orders Yet</h2>
        <p className="mt-2">Looks like you haven’t placed any orders.</p>
      </div>
    )}
  </div>
</div>

  );
};

export default Orders;
