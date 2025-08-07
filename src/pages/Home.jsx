import NavBar from '../section/NavBar'
import Hero from '../section/Hero'
import LatestProduct from '../section/LatestProduct'
import ProductSlide from '../components/ProductSlide'


const Home = () => {
  return (
    <div>
        <NavBar/>
        {/* Hero Section */}
        <Hero/>
        <LatestProduct/>
        

    </div>
  )
} 

export default Home
