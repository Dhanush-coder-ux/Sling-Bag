import { useNavigate } from "react-router-dom"

export const MobileAppBar = ({appbarTitle, scrolled, withBackArrow}) => {
  const navigator=useNavigate();
  return (
    <div className={`
        flex justify-between items-center w-full py-3 px-2 fixed top-0 z-50
        ${scrolled ? 'backdrop-blur-sm bg-white/30 shadow-md' : 'bg-transparent'}
      `}>
        {withBackArrow ? <img src={'/icons/arrow.svg'} width={30} height={30} alt="" className="font-extrabold cursor-pointer" onClick={()=>navigator(-1)}/> : <span></span>}
        <span className="font-extrabold text-2xl">{ appbarTitle }</span>
        <span></span>
    </div>
  )
}