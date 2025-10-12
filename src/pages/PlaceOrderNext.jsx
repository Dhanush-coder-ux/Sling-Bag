import { MobileAppBar } from '../section/MobileAppBar';
import Button from '../components/Buttons';
import React, { useContext, useState } from 'react';
import NavBar from '../section/NavBar';
import { isMobile } from 'react-device-detect';
import { OrderContext } from '../context/OrderContext';

const PlaceOrderNext = () => {
  const rupees = "₹";
  const userCart = JSON.parse(sessionStorage.getItem('userCart')) || [];
  const { addOrder } = useContext(OrderContext);
  const totalAmount = userCart.reduce((sum, p) => sum + (p.total_price || 0), 0);

  // 🌀 Loading state
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmOrder = async () => {
    setIsLoading(true);
    try {
      await addOrder();
    } catch (error) {
      console.error("Order failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isMobile ? <MobileAppBar appbarTitle="Orders" withBackArrow={true} /> : <NavBar />}
      
      <div className="w-full flex justify-center p-4 max-sm:mt-15">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg border border-gray-300 my-6 p-6">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Order Summary</h2>

          {/* Products List */}
          <div className="space-y-4">
            {userCart.map((product) => (
              <div key={product.product_id} className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div className="flex items-center gap-4">
                  <img src={product.image_urls[0]} alt={product.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-semibold text-black">{product.title}</p>
                    <p className="text-gray-600">Quantity: {product.quantity}</p>
                  </div>
                </div>
                <div className="text-black font-semibold">
                  ₹{product.total_price}
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-black">Total Amount</span>
            <span className="text-lg font-bold text-black">{rupees} {totalAmount}</span>
          </div>

          {/* Booking Date and Payment */}
          <div className="mt-4 text-gray-700 text-sm">
            <p><span className="font-medium">Booking Date:</span> {'10 Aug, 2025'}</p>
            <p><span className="font-medium">Payment Method:</span> {'COD'}</p>
          </div>

          {/* Confirm Order Button */}
          <div className="mt-6 flex justify-center">
            <Button
              text={
                isLoading ? (
                  <span className="flex justify-center items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Confirm Order"
                )
              }
              disabled={isLoading}
              className={`rounded-lg text-white p-2 w-full text-center transition-all duration-200 ${
                isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
              }`}
              onClick={handleConfirmOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderNext;
