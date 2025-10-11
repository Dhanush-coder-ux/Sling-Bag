import { Link, NavLink } from "react-router-dom";
import Button from "../components/Buttons";
import { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { LoginContext } from "../context/LoginContext";
import Cookies from "js-cookie";
import Title from "../components/Title";

const NavBar = () => {
  const { isLoggedIn, login, logout } = useContext(LoginContext);
  const { cartCount,setCartCount } = useContext(CartContext);
  const [isImageError, setImageError] = useState(false);
  const [isLoading,setIsLoading]=useState(false)
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const userProfile = Cookies.get("user_profile");
  const userName = Cookies.get("user_name");

  useEffect(()=>{
    console.log('is lOgged im :',isLoggedIn);
    
    if (isLoggedIn==false){
      setCartCount(0)
    }
    
  },[isLoggedIn])

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="navbar flex justify-between items-center px-6 py-4 shadow-md bg-white h-20">
        <Link to="/" className="text-2xl font-bold text-black">
          <Title text1={"Sling"} text2={"Bag"} />
        </Link>

        <div className="bg-[#E5E5E5] text-black text-lg font-semibold px-4 py-4 rounded-lg sm:flex gap-8 hidden">
          <NavLink className="flex flex-col items-center" to="/">
            Home
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center" to="/collections">
            Product
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center" to="/know-us">
            Know Us
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center" to="/orders">
            Orders
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
          </NavLink>
        </div>

        <div className="flex gap-8 text-medium text-xl max-sm:px-2 px-4 py-3 items-center">
          <div className="px-4 py-3">
            <NavLink className="relative sm:flex hidden" to="/cart">
              <img src="/icons/carts.svg" width={30} height={30} alt="" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 aspect-square rounded-full text-white text-[8px]">
                {cartCount > 99 ? "99+" : cartCount}
              </p>
            </NavLink>
          </div>

          {/* Profile or Login */}
          <div className="relative" ref={dropdownRef}>
            {isLoggedIn ? (
              <div>
                <div
                  className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center cursor-pointer"
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
                    <h1 className="text-black font-bold text-2xl">
                      {userName && userName !== ""
                        ? userName.slice(0, 2).toUpperCase()
                        : "SL"}
                    </h1>
                  )}
                </div>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-fadeIn z-80">
                    <p className="px-4 py-2 text-gray-700 font-medium border-b">
                      Hi, {userName || "User"}
                    </p>
                    {Cookies.get('role')=='admin' && <button
                      onClick={() => {
                        window.open('http://localhost:5174/')
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-purple-500 hover:bg-gray-100 font-semibold border-b"
                    >
                      Dashboard
                    </button>}

                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 font-semibold"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                text={isLoading ? "SignIn...":"Sign In"}
                onClick={() => {setIsLoading(true); login(); setIsLoading(false);}}
                className="bg-black px-6 py-3"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
