import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import BagContextProvider from './context/BagContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <BagContextProvider>
        <App />
  </BagContextProvider>

 
  </BrowserRouter>
)
