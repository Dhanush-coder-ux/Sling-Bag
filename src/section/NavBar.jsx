import { Link, NavLink } from "react-router-dom"
import Button from "../components/Buttons"



const NavBar = () => {
  return (
    <div >
       <div className="navbar">
      <Link to={'/'} className="text-2xl font-bold text-black">
        {/* <img src="" alt="" /> */}
        Sling Bag
      </Link>
      
      
      <div className={`bg-[#E5E5E5]  text-black text-lg font-semibold px-4 py-4 rounded-full hidden sm:flex gap-8 text-medium text-medium`}>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/product'} >Product</NavLink>
        <NavLink to={'/favourites'} >Favourites</NavLink>
        <NavLink to={'/contact'} >Know Us</NavLink>

      </div>

        <div className=" gap-8 text-medium text-xl">
        <Button text={'Sign-in'} className="bg-black px-6 py-3"/>
        </div>
      
    </div>
    </div>
   
  )
}

export default NavBar
