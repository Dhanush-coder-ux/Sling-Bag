import { MobileAppBar } from '../section/MobileAppBar';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../section/NavBar';
import { isMobile } from 'react-device-detect';
import { OrderContext } from '../context/OrderContext';

const PlaceOrder = () => {

  const { addOrderAddress,getOrderAddress,userAddress,setUserAddress } = useContext(OrderContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  useEffect(() => {
    getOrderAddress({setIsSubmitting});
  }, [])


  const onInputChange=(e)=>{
    setUserAddress({
      ...userAddress,
      [e.target.name]:e.target.value
    }
    )
  }
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
  
    addOrderAddress({setIsSubmitting})
  };

  return (
    <div>
      {isMobile ? <MobileAppBar appbarTitle="Orders" withBackArrow={true} /> : <NavBar />}

      <div className="flex justify-center mt-5 px-4 mb-5 max-sm:mt-20 max-sm:mb-20">
        <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full p-8 sm:p-10 border border-gray-300">
          <h1 className="text-3xl font-bold text-center text-black mb-8">Place Your Order</h1>

            <input
              name="street"
              type="text"
              value={userAddress.street.trim()}
              onChange={onInputChange}
              placeholder="Street"
              className="bg-gray-100 text-black border border-gray-400 rounded-lg px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input
                name="city"
                value={userAddress.city.trim()}
                onChange={onInputChange}
                type="text"
                placeholder="City"
                className="bg-gray-100 text-black border border-gray-400 rounded-lg px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                required
              />
              <input
                name="state"
                onChange={onInputChange}
                value={userAddress.state.trim()}
                type="text"
                placeholder="State"
                className="bg-gray-100 text-black border border-gray-400 rounded-lg px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ">
              <input
                name="zipcode"
                onChange={onInputChange}
                value={userAddress.zipcode.trim()}
                type="text"
                placeholder="Zipcode"
                className="bg-gray-100 text-black border border-gray-400 rounded-lg px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                required
              />
              <input
                name="country"
                onChange={onInputChange}
                value={userAddress.country.trim()}
                type="text"
                placeholder="Country"
                className="bg-gray-100 text-black border border-gray-400 rounded-lg px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                required
              />
            </div>

            <input
              name="mobile_number"
              onChange={onInputChange}
              value={userAddress.mobile_number.trim()}
              type="number"
              placeholder="Phone Number"
              className="mt-4 bg-gray-100 text-black border border-gray-400 rounded-lg px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition"
              required
            />

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`mt-5 w-full bg-black text-white py-3 rounded-lg font-medium transition cursor-pointer ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-800'
              }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'View Order Summary'
              )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
