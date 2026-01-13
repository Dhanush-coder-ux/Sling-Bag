import React, { useContext } from 'react'
import { NavigationButton } from '../components/Buttons'
import { CartContext } from '../context/CartContext';
import { Contact } from 'lucide-react';

export function BottomAppBar() {
    const { cartCount }=useContext(CartContext)
    const navbars=[
        {label:'Home',icon:"/icons/home.svg",route:'/',canShowBadge:false},
        {label:'Products',icon:"/icons/product.svg",route:'/collections',canShowBadge:false},
        {label:'Cart',icon:"/icons/cart.svg",route:'/cart',canShowBadge:true,badgeCount:cartCount},
         {label:'Orders',icon:"/icons/orders.svg",route:'/orders',canShowBadge:false},
         {label:'Contact',icon:Contact,route:'/contact',canShowBadge:false}
    ];
    
    return (
        <div className='w-full p-3.5 fixed bottom-0 flex justify-between  bg-white shadow-2xl border-t-2'>
            {
                navbars.map(({ label , icon , route, canShowBadge, badgeCount },index)=>(
                    <NavigationButton key={index} label={label} icon={icon} route={route} canShowBadge={canShowBadge} badgeCount={badgeCount}></NavigationButton> 
                ))
            }
        </div>
    )
}
