import { Link, NavLink } from "react-router-dom"
import Button from "../components/Buttons"


const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={'/'} className="text-2xl font-bold text-black">
        {/* <img src="" alt="" /> */}
        Sling Bag
      </Link>
      
      
      <div className=" bg-gray-200 text-black px-4 py-4 rounded-full hidden sm:flex gap-8 text-medium text-medium">
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/product'} >Product</NavLink>
        <NavLink to={'/about'} >About</NavLink>
        <NavLink to={'/contact'} >Contact</NavLink>

      </div>

        <div className=" gap-8 text-medium text-xl px-6 py-3">
        <Button text={'Sign-in'} className="bg-black px-6 py-3"/>
        </div>
      
    </div>
  )
}

export default NavBar
