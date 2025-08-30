
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { ProductsPage } from './pages/Product'
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { BottomAppBar } from './section/BottomAppBar'
import ProductView from './pages/ProductView'
import KnowUsPage from './pages/KnowUs'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'



function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collections' element={<ProductsPage/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:productId' element={<ProductView/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/know-us' element={<KnowUsPage/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
    </Routes>
    { isMobile && <BottomAppBar></BottomAppBar>}
      
    </>
  )
}

export default App
