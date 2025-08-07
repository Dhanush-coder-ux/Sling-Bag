import { isMobile } from 'react-device-detect'
import { FavouriteProductCard } from '../components/ProductCard'
import React from 'react'
import { MobileAppBar } from '../section/MobileAppBar'
import NavBar from '../section/NavBar'
import { Productsjson } from '../constant'

export default function FavouritePage() {
  return (
    <>
    {/* for crossplatform appbar */}
          { isMobile ? <MobileAppBar  appbarTitle={"Favourites"}  withBackArrow={false}></MobileAppBar> : <NavBar/>}
    <div className='grid lg:grid-cols-2 m-3.5 space-y-3.5 place-items-center lg:mt-5 mx-8 max-sm:mx-2 max-sm:mt-20 max-sm:mb-20 md:mt-20 md:mb-20'>
        {
            Productsjson.map((value)=>(
            <FavouriteProductCard product={{id:value.id,title:value.title,description:value.description,price:value.price,images:value.image}}></FavouriteProductCard>
            ))
        }
    </div>
    </>
    
  )
}
