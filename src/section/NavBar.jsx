import { Link, NavLink } from "react-router-dom";
import Button from "../components/Buttons";
import { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { LoginContext } from "../context/LoginContext";
import Cookies from "js-cookie";
import Title from "../components/Title";



const NavBar = () => {
  const { isLoggedIn, login, logout } = useContext(LoginContext);
  const { cartCount, setCartCount } = useContext(CartContext);
  const [isImageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const userProfile = Cookies.get("user_profile");
  const userName = Cookies.get("user_name");
  const userRole = Cookies.get("role");

  useEffect(() => {
    if (isLoggedIn === false) {
      setCartCount(0);
    }
  }, [isLoggedIn]);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Reusable Nav Item Component ---
  const NavItem = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative group flex flex-col items-center text-sm font-medium transition-colors duration-300 ${
          isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Animated Underline */}
          <span
            className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </>
      )}
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- 1. Logo Section --- */}
          <Link to="/" className="flex-shrink-0 group">
             <div className="transform group-hover:scale-105 transition-transform duration-300">
                <Title text1={"Sling"} text2={"Bag"} />
             </div>
          </Link>

        
          <div className="hidden md:flex space-x-8 items-center">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/collections">Product</NavItem>
            <NavItem to="/orders">Orders</NavItem>
          </div>

       
          <div className="flex items-center gap-6">
       
            {/* Cart Icon */}
            <NavLink to="/cart" className="hidden md:flex relative group p-2 rounded-full hover:bg-gray-100 transition-colors">
              <img src="/icons/cart.svg" width={24} height={24} alt="Cart" className="opacity-80 group-hover:opacity-100" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            </NavLink>

            {/* Profile Dropdown / Login Button */}
            <div className="relative" ref={dropdownRef}>
              {isLoggedIn ? (
                <div className="relative">
                  {/* User Avatar */}
                  <div
                    className="w-10 h-10 rounded-full border border-gray-300 p-0.5 flex items-center justify-center cursor-pointer hover:border-black transition-colors"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    {userProfile && !isImageError ? (
                      <img
                        src={userProfile}
                        alt="profile"
                        className="rounded-full object-cover w-full h-full"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                        {userName ? userName.slice(0, 2).toUpperCase() : "US"}
                      </div>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn z-50 origin-top-right">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="text-sm font-semibold text-gray-900 truncate">{userName || "User"}</p>
                      </div>
                      
                      {userRole === 'admin' && (
                        <button
                          onClick={() => {
                            window.open('http://localhost:5174/');
                            setDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 font-medium transition-colors"
                        >
                          Admin Dashboard
                        </button>
                      )}

                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  text={isLoading ? "..." : "Login"}
                  onClick={() => { setIsLoading(true); login(); setIsLoading(false); }}
                  className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                />
              )}
            </div>

          

          </div>
        </div>
      </div>

    

    </nav>
  );
};

export default NavBar;