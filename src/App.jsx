
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './section/NavBar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'



function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      
    </>
  )
}

export default App
