import { Link, NavLink } from "react-router-dom"
import Button from "../components/Button"


const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={'/'} className="text-2xl font-bold text-black">
        {/* <img src="" alt="" /> */}
        Sling Bag
      </Link>
      
      
      <div className="hidden  bg-gray-200 text-black px-4 py-4 rounded-full sm:flex gap-8 text-medium text-medium">
        <NavLink to={'/'} className={'text-2xl'}>Home</NavLink>
        <NavLink to={'/product'} >Product</NavLink>
        <NavLink to={'/about'} >About</NavLink>
        <NavLink to={'/contact'} >Contact</NavLink>

      </div>

        <div className="hidden sm:flex gap-8 text-medium text-xl">
        <Button text={'Sign-in'} className="bg-black"/>
        </div>
      
    </div>
  )
}

export default NavBar
