import NavBar, { handleSignIn } from '../section/NavBar'
import Hero from '../section/Hero'
import LatestProduct from '../section/LatestProduct'
import ProductSlide from '../components/ProductSlide'
import { useContext, useEffect } from 'react'
import { BagContext } from '../context/BagContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'






const Home = () => {
  const [searchParams]=useSearchParams();
  const {getBtnName,updateBtnName}=useContext(BagContext);

  const deleteCookies=()=>{
    console.log("hello world");
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    updateBtnName({name:'Sign-In',func:handleSignIn})
  }

  const handle = async ({token}) => {
      
      try {
        
        const tokens=await axios.get(`http://127.0.0.1:8001/auth/token/both?token=${token}`);

        if (tokens.status==200){
          Cookies.set("access_token",tokens.data.access_token);
          Cookies.set('refresh_token',tokens.data.refresh_token);
          updateBtnName({name:'Sign-Out',func:deleteCookies});
        }

      } catch (err) {
        console.error("Error checking user:", err);
      
      }
    };

  useEffect(()=>{
    const token=searchParams.get('token');
    console.log(token)
    if (token){
      handle({token});
    }
    else{
      console.log("not sign in");
    }
    
    console.log(Cookies.get('access_token'));
    
    if (Cookies.get('access_token') && Cookies.get('refresh_token')){
      updateBtnName({name:'Sign-Out',func:deleteCookies});
    }


  },[])
  return (
    <div className='max-sm:mb-20'>
        <NavBar/>
        {/* Hero Section */}
        <Hero/>
        <LatestProduct/>
        

    </div>
  )
} 

export default Home
