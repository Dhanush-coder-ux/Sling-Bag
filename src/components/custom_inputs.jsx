

export const GrayBgTextField = ( { placeholder, type, value, setValue} ) => {

  return (
    <div className="bg-[#E5E5E5] h-11 rounded-[10px] m-3.5 shadow">
       <input type={type} placeholder={placeholder} value={value} onChange={(e)=>{setValue(e.target.value)}} className=' border-none h-11 w-full rounded-[10px] text-black font-semibold placeholder:text-gray-400 pl-3 focus:outline-none'/>
    </div>
  )
}


// pendig to create a dropdown