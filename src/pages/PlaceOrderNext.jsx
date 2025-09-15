import { MobileAppBar } from '../section/MobileAppBar';
import Button from '../components/Buttons';
import { sampleOrder } from '../constant';
import React, { useContext } from 'react';
import NavBar from '../section/NavBar';
import { isMobile } from 'react-device-detect';
import { Code, IndianRupee } from 'lucide-react';
import { BagContext } from '../context/BagContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrderNext = () => {
    const { getCartItems, rupees,backend_url } = useContext(BagContext);
    console.log("cartItmes🍦 :",JSON.parse(sessionStorage.getItem('orderData')));
    const cartitems=JSON.parse(sessionStorage.getItem('orderData'));
    const navigateTo=useNavigate();
    
    const totalAmount = cartitems.reduce((sum, p) => sum + (p.total_price || 0), 0);

    async function sumbitOrder(){
        try{
            const res = await axios.post(`${backend_url}/order`);
            if (res.status==200){
                console.log("order msg :",res.data);
                navigateTo('/')
                
            }
        }
        catch(e){
            console.log("error while sumbiting order : ",e);
            
        }
    }
  return (
    <div>

    {isMobile ? <MobileAppBar appbarTitle="Orders" withBackArrow={true} /> : <NavBar />}
    <div className="w-full flex justify-center p-4 max-sm:mt-10">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg border border-gray-300 my-6 p-6">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">Order Summary</h2>

        {/* Products List */}
        <div className="space-y-4">
          {cartitems.map((product) => (
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
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
            text="Confirm Order"
            className="bg-black rounded-lg text-white p-2 w-full text-center"
            onClick={() => sumbitOrder()}
          />
        </div>
      </div>
    </div>
    </div>
  );
};



export default PlaceOrderNext;
