import { navbars } from '../constant'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function BottomAppBar() {


    return (
        <div className='w-full p-3.5 fixed bottom-0 flex justify-between  bg-white shadow-2xl border-t-2'>
            {
                navbars.map(({ label , icon , route })=>(
                    <NavLink to={route} key={label} className={({ isActive }) => isActive ? "text-black" : "text-gray-400"}>
                        <div className='flex flex-col items-center'>
                            <img src={icon} alt="" color='black' width={20} height={20}/>
                            <p className='font-bold text-[10px]'>{label}</p>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}
