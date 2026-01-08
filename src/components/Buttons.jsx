import { NavLink } from "react-router-dom";


const Button = ({ text, className = "", id, onClick,disabled }) => {
  return (
    <button disabled={disabled} id={id} onClick={onClick} className={`font-semibold cursor-pointer rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`} >
      <span className="relative z-10">{text}</span>
    </button>
  );
};


export const BlackBgButton = ( { text, canHover } ) => {
  let baseStyle=`bg-[#1A1A1A] font-bold text-white text-center m-3.5 p-2 rounded-full cursor-pointer`;
  let hoverStyle=`hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-gray-500`;

  let finalStyle=canHover ? `${baseStyle} ${hoverStyle}` : baseStyle;
  return (
    <div className={finalStyle}>
       { text }
    </div>
  )
}

export const GrayBgButton = ( { text, canHover } ) => {
  let baseStyle=`bg-[#E5E5E5] font-bold text-black text-center m-3.5 p-3 rounded-full cursor-pointer`;
  let hoverStyle=`hover:bg-[#1A1A1A] hover:text-white`;

  let finalStyle=canHover ? `${baseStyle} ${hoverStyle}` : baseStyle;
  return (
    <div className={finalStyle}>
       { text }
    </div>
  )
}


export const NavigationButton=({ label , icon , route, canShowBadge, badgeCount }) =>{
  
  return (
    <NavLink to={route} key={label} className={({ isActive }) => isActive ? "text-black" : "text-gray-400"}>
      <div className='flex flex-col items-center'>
        <button type="button" className="relative inline-flex items-center text-sm font-medium text-center text-whitefocus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <img src={icon} alt="" color='black' width={20} height={20}/>
          {
            canShowBadge &&
            <>
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-5 h-4 text-[9px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-3 dark:border-gray-900">{badgeCount>99 ? '99+' : badgeCount }</div>
            </>
          }
        </button>
        <p className='font-bold text-[10px]'>{label}</p>
      </div>
    </NavLink>
  )
}



export default Button;
