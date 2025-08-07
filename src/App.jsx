
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { ProductsPage } from './pages/Product'
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { BottomAppBar } from './section/BottomAppBar'
import ProductView from './pages/ProductView'
import FavouritePage from './pages/Favourite'



function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collections' element={<ProductsPage/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:productId' element={<ProductView/>} />
      <Route path='/favourite' element={<FavouritePage/>}/>
    </Routes>
    { isMobile && <BottomAppBar></BottomAppBar>}
      
    </>
  )
}

export default App
