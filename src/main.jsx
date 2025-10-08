import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx';
import { OrderContextProvider } from './context/OrderContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import { LoginContextProvider } from './context/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartContextProvider>
      <LoginContextProvider>
        <OrderContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </OrderContextProvider>
      </LoginContextProvider>
    </CartContextProvider>
    
  </BrowserRouter>
)
