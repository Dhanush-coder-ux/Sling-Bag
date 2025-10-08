import NavBar from '../section/NavBar'
import Hero from '../section/Hero'
import LatestProduct from '../section/LatestProduct'
import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { CartContext } from '../context/CartContext'


const Home = () => {
  const [searchParams]=useSearchParams();
  const {getLoginCredentials,checkIsUserLoggedIn,isLoggedIn} = useContext(LoginContext)
  const {getUserCartCount}=useContext(CartContext)



  useEffect(()=>{
    checkIsUserLoggedIn()

    const token=searchParams.get('token');
    const name=searchParams.get('name');
    const profile=searchParams.get('profile')

    console.log("User params : ",name,profile,token)

    if (token && name ){
      getLoginCredentials({user_token:token,user_name:name,user_profile:profile});
    }
    else{
      console.log("Please Sigin in your token is expired");
    }
  },[])

  useEffect(()=>{
    getUserCartCount()
  },[isLoggedIn])

  return (
    <div className='max-sm:mb-20'>
        <NavBar/>
        {/* Hero Section */}
        <Hero/>
        {/* <LatestProduct/> */}
        

    </div>
  )
} 

export default Home
