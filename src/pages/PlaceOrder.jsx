import { MobileAppBar } from '../section/MobileAppBar';
import Title from '../components/Title';
import React, { useContext, useState } from 'react'
import NavBar from '../section/NavBar';
import { isMobile } from 'react-device-detect';
import { BagContext } from '../context/BagContext';
import { Productsjson } from '../constant';

const PlaceOrder = () => {

  const [method,setMethod]=useState('COD');
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });
    const {rupees ,cartTotAmount, cartitems, navigate,setCartItems} = useContext(BagContext);
     const [isSubmitting, setIsSubmitting] = useState(false);

    const onchangehandler =(e)=>{
    const name=e.target.name
    const value=e.target.value

    setFormData(data => ({...data,[name]:value}))
  }



    const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true); 
    try {
      let orderItem = [];
      for (const items in cartitems) {
          for (const item in cartitems[items]) {
              if (cartitems[items][item] > 0) {
                  const iteminfo = structuredClone(Productsjson.find(product => product.id === items));
                  if (iteminfo) {
                     
                      iteminfo.quantity = cartitems[items][item];
                      orderItem.push(iteminfo); 
                  }
              }
          }
      }



      let addressList = [
        formData.firstname,
        formData.lastname,
        formData.email,
        formData.street,
        formData.city,
        formData.state,
        formData.zipcode,
        formData.country,
        formData.phone
    ];

    let Orderdata = {
      products: orderItem,
      amount: getCartAmount(),
      address: addressList,
      paymentmethod: method
  };
      switch(method){
        // api call for cod
        case "COD":
          const response = await axios.post(`${backend_url}/orders/placeorders`,Orderdata,
            {
              headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data){
              setCartItems({})
              navigate('/orders')
            }else{
              console.error(response.data.message)
            }
          

        break;

        default:
          break
      }
      
    } catch (error) {
           console.error(error);
        toast.error("Failed to place order. Please try again.");
    }finally {
      setIsSubmitting(false); // Stop loading regardless of success/error
    }

  }

  return (
    <div>
      { isMobile ? <MobileAppBar  appbarTitle={"Orders"}  withBackArrow={false}></MobileAppBar> : <NavBar/>}
        <div className='flex flex-col sm:flex-row justify-between gap-5 p-5 sm:pt-14 min-h-[80vh]'>

      <div className='flex flex-col gap-5 w-full sm:w-[480px]'>
          <div className='text-xl sm:text-2xl my-4'>
              <Title text1={"DELIVERY"} text2={"INFO"} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"}/>
          </div>

         



        <input
          onChange={onchangehandler}
          name='street'
          value={formData.street}
          type="text"
          className='border border-gray-300 rounded py-1.5 px-3.5'
          placeholder='Street'
          required
        />

        <div className='flex gap-4'>
          <input
            onChange={onchangehandler}
            name='city'
            value={formData.city}
            type="text"
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            
            placeholder='City'
            required
          />
          <input
            onChange={onchangehandler}
            name='state'
            value={formData.state}
            type="text"
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='State'
            required
          />
        </div>

        <div className='flex gap-4'>
          <input
            onChange={onchangehandler}
            name='zipcode'
            value={formData.zipcode}
            type="number"
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='Zipcode'
            required
          />
          <input
            onChange={onchangehandler}
            name='country'
            value={formData.country}
            type="text"
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='Country'
            required
          />
        </div>

        <input
          onChange={onchangehandler}
          name='phone'
          value={formData.phone}
          type="number"
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          placeholder='Phone Number'
          required
        />
        
        

      </div>
           <div className='mt-8'>
        <div className='max-w-80 mt-8'>
            <h1 className={`font-bold `}>Tot Amount : {rupees} {cartTotAmount}</h1>
        </div>

        <div className='mt-13'>
          <div className='w-full text-end'>
            <button 
              type='submit' 
              disabled={isSubmitting}
              className={`px-3 py-3 bg-black text-white text-sm flex items-center justify-center min-w-[150px] ${
                isSubmitting ? 'opacity-75' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'PLACE ORDER'
              )}
            </button>
          </div>
          </div>
</div>
      
      
    </div>

    </div>
  
  )
}

export default PlaceOrder
