import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ContextCart
import { CartProvider } from "../src/contexts/CartContext.tsx";

import { register } from 'swiper/element/bundle'
register ();

import 'swiper/css';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(

  // <React.StrictMode>
  <CartProvider>
    <App />
   </CartProvider>
  // {/* </React.StrictMode>, */}
)
