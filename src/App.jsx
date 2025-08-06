
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { ProductsPage } from './pages/Product'
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { BottomAppBar } from './section/BottomAppBar'



function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<ProductsPage/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    { isMobile && <BottomAppBar></BottomAppBar>}
      
    </>
  )
}

export default App
