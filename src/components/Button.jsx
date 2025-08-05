const Button = ({ text, className = "", id, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e); 
  };

  return (
    <a
      id={id}
      onClick={handleClick}
      className={`font-semibold text-white cursor-pointer rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      <span className="relative z-10">{text}</span>
     
    </a>
  );
};

export default Button;
