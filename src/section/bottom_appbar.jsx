import React from 'react'
import { NavLink } from 'react-router-dom'

export function BottomAppBar(props) {
    const navbars=[
        {label:'Home',icon:"/icons/home.svg",route:'/'},
        {label:'Products',icon:"/icons/product.svg",route:'/product'},
        {label:'Cart',icon:"/icons/cart.svg",route:'/cart'},
        {label:'Favourite',icon:"/icons/favourite.svg",route:'/favourite'},
        {label:'Know us',icon:"/icons/about.svg",route:'/contact'}
    ]

    return (
        <div className='w-full p-3.5 fixed bottom-0 flex justify-between  bg-white shadow-2xl border-t-2'>
            {
                navbars.map((value)=>(
                    <NavLink to={value.route} className={({ isActive }) => isActive ? "text-black" : "text-gray-400"}>
                        <div className='flex flex-col items-center'>
                            <img src={value.icon} alt="" color='black' width={20} height={20}/>
                            <p className='font-bold text-[10px]'>{value.label}</p>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}
