import React from 'react'

export const Chip = ({text, className,selectedChip,setChipClicked}) => {
  return (
    <div onClick={()=>setChipClicked(text)} className={
          
           selectedChip==text? `w-fit h-10 bg-black text-white font-bold px-5 py-2 text-center rounded-xl cursor-pointer shadow  ${className}`
           : `w-fit h-10 bg-[#E5E5E5] text-[#1A1A1A] font-bold px-5 py-2 text-center rounded-xl cursor-pointer shadow  ${className}`
        
    }>
       {text}
    </div>
  )
}
