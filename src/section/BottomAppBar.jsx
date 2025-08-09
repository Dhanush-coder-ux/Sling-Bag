import { BagContext } from '../context/BagContext'
import { navbars } from '../constant'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export function BottomAppBar() {
    const { getCartCount } = useContext(BagContext)

    return (
        <div className='w-full p-3.5 fixed bottom-0 flex justify-between bg-white shadow-2xl border-t-2'>
            {navbars.map(({ label, icon, route }) => (
                <NavLink 
                    to={route} 
                    key={label} 
                    className={({ isActive }) => isActive ? "text-black" : "text-gray-400"}
                >
                    <div className='relative flex flex-col items-center'>
                        <img src={icon} alt="" color='black' width={20} height={20} />

                        {/* Show count only for cart */}
                        {label.toLowerCase() === 'cart' && getCartCount() > 0 && (
                            <p className="absolute right-[-5px] top-[-2px] w-4 text-center leading-4 bg-red-600 aspect-square rounded-full text-white text-[8px]">
                                {getCartCount()}
                            </p>
                        )}

                        <p className='font-bold text-[10px]'>{label}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
