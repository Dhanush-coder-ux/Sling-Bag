import React, { useContext, useEffect, useState } from 'react'
import { MobileAppBar } from '../section/MobileAppBar';
import { FavouriteProductCard, ProductCard } from '../components/ProductCard';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import NavBar from '../section/NavBar';
import { Chip } from '../components/Chip';
import { chips } from '../constant';
import { BagContext } from '../context/BagContext';



export const ProductsPage = () => {
    
    const {Productsjson } = useContext(BagContext);
    const [selectedChipText,setChipClicked]=useState("All");
    
    return (
      <>
        {/* for crossplatform appbar */}
          { isMobile ? <MobileAppBar  appbarTitle={"Products"}  withBackArrow={false}></MobileAppBar> : <NavBar/>}

        {/* for filters */}
          <div className='flex mt-10 mx-8 max-sm:mx-2 max-sm:mt-15 md:mt-20'>
            <h1 className='text-2xl font-semibold max-sm:text-sm'>Filters</h1>
          </div>

          <div className='flex flex-row mt-4 mx-8 overflow-x-auto whitespace-nowrap no-scrollbar max-sm:mx-2'>
           {chips.map((value) => (
                <Chip
                  key={value} // ✅ Add this line
                  text={value}
                  className="mr-3.5 max-sm:scale-90 max-sm:mr-1"
                  selectedChip={selectedChipText}
                  setChipClicked={setChipClicked}
                />
              ))}

          </div>

        {/* for products */}
          <div className=' grid lg:grid-cols-4  max-sm:grid-cols-2 max-sm:mb-20 gap-4 mt-8 mx-2 md:mx-8 md:grid-cols-2 md:mb-20 '>  
            {
                Productsjson.map((item,index)=>(
                  <ProductCard  key={index}  
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      images={item.image}

                  />
              ))

              
            }
          </div>
      </>
    )
}
