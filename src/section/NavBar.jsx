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
      
      
      <div className={`bg-[#E5E5E5]  text-black text-lg font-semibold px-4 py-4 rounded-full sm:flex gap-8 hidden text-medium text-medium`}>
        <NavLink className={'flex flex-col items-center'} to={'/'} >
            Home
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>
        <NavLink  className={'flex flex-col items-center'} to={'/product'} >
            Product
            <hr className=" w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>
        <NavLink  className={'flex flex-col items-center'} to={'/favourites'} >
            Favourites
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>
        <NavLink  className={'flex flex-col items-center'} to={'/contact'} >
             Know Us
            <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
        </NavLink>

      </div>

        <div className=" gap-8 text-medium text-xl px-6 py-3">
        <Button text={'Sign-in'} className="bg-black px-6 py-3"/>
        </div>
      
    </div>
    </div>
   
  )
}

export default NavBar
