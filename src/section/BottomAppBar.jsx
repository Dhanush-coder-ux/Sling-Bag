import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BagContext } from "../context/BagContext"
import { coldGrey, platinum } from '../constant/ColorCodes'
import { NavigationButton } from '../components/Buttons'

export function BottomAppBar() {
    const {getCartCount}=useContext(BagContext)
    const navbars=[
        {label:'Home',icon:"/icons/home.svg",route:'/',canShowBadge:false},
        {label:'Products',icon:"/icons/product.svg",route:'/collections',canShowBadge:false},
        {label:'Cart',icon:"/icons/cart.svg",route:'/cart',canShowBadge:true,badgeCount:getCartCount()},
        {label:'Know us',icon:"/icons/about.svg",route:'/know-us',canShowBadge:false}
    ];
    
    return (
        <div className='w-full p-3.5 fixed bottom-0 flex justify-between  bg-white shadow-2xl border-t-2'>
            {
                navbars.map(({ label , icon , route, canShowBadge, badgeCount })=>(
                    <NavigationButton label={label} icon={icon} route={route} canShowBadge={canShowBadge} badgeCount={badgeCount}></NavigationButton> 
                ))
            }
        </div>
    )
}
