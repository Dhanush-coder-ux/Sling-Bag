
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './section/NavBar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { ProductsPage } from './pages/Product'



function App() {


  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<ProductsPage/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      {/* <ProductsPage></ProductsPage> */}
    </>
  )
}

export default App
