
export const MobileAppBar = ({appbarTitle}) => {
  return (
    <div className='flex justify-between items-center w-full py-6 px-4 fixed top-0'>
        <img src={'/icons/arrow.svg'} width={30} height={30} alt="" className="font-extrabold"/>
        <span className="font-extrabold text-2xl mr-4">{ appbarTitle }</span>
        <span></span>
    </div>
  )
}