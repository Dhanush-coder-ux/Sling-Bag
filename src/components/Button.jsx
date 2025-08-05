const Button = ({ text, className = "", id }) => {
  return (
    <a
      id={id}
      onClick={(e) => e.preventDefault()}
      className={`group relative inline-block px-6 py-3 font-semibold text-white cursor-pointer rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 rounded-full bg-circle blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
    </a>
  );
};

export default Button;
