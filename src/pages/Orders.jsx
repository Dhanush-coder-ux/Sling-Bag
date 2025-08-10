import NavBar from '../section/NavBar';
import Title from '../components/Title';
import { BagContext } from '../context/BagContext';
import { MobileAppBar } from '../section/MobileAppBar';
import React, { useContext } from 'react'
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { Productsjson,rupees } = useContext(BagContext);
 

  return (
    
    <div >
         { isMobile ? <MobileAppBar  appbarTitle={"Orders"}  withBackArrow={false}></MobileAppBar> : <NavBar/>}

        <div className='mt-20 mx-10 max-sm:mx-6'>
             <Title text1={'My'} text2={'Orders'}  text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"} divClassName={"mb-0"} />
          {Productsjson.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row md:items-center justify-between gap-4'>
              <div className='flex items-start text-sm'>
            
                <img src={item.image[0]} alt="" className='w-16 sm-20' />
                <div className='ml-4'>
                  <p className='sm:text-base font-medium'>{item.title}</p>
                  <div className='flex items-center gap-4 mt-2 text-gray-400'>
                    <p>{rupees}{item.price}</p>
                  </div>
                  <p className='mt-2'>Date: <span>10, aug</span></p>
                  <p className='mt-2'>Payment: <span>cod</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-3'>
                  <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
                  <p className='text-sm md:text-base'>shipped</p>
                </div>
                <button
                
                  className='border px-4 py-2 text-sm font-medium cursor-pointer rounded-sm'
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
    
    </div>
  )
}

export default Orders
