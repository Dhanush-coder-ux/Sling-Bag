
export const MobileAppBar = ({appbarTitle}) => {
  return (
    <div className='flex justify-between items-center w-full h-10 bg-[#E5E5E5] fixed top-0'>
        <img src={'/icons/arrow.svg'} width={30} height={30} alt="" className="font-extrabold ml-3.5"/>
        <span className="font-bold mr-3.5">{ appbarTitle }</span>
        <span></span>
    </div>
  )
}