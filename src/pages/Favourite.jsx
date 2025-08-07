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
    
    {/* favourite products */}
    <div className='grid lg:grid-cols-2 space-y-3.5 space-x-3.5 place-items-center lg:mt-10 mx-8 max-sm:mx-2 max-sm:mt-20 max-sm:mb-20 md:mt-20 md:mb-20'>
      {
          Productsjson.map((value)=>(
          <FavouriteProductCard key={value.id} product={{id:value.id,title:value.title,description:value.description,price:value.price,isFavourite:value.isFav,images:value.image}}></FavouriteProductCard>
          ))
      }
    </div>
    </>
    
  )
}
