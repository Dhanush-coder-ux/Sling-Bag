const Button = ({ text, className = "", id, onClick }) => {
  return (
    <div id={id} onClick={onClick} className={`font-semibold cursor-pointer rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`} >
      <span className="relative z-10">{text}</span>
    </div>
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



export default Button;
