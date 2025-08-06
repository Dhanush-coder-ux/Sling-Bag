import NavBar from '../section/NavBar'
import Hero from '../section/Hero'
import LatestProduct from '../components/LatestProduct'


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
