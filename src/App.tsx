// Styles
import "./App.css";

// Pages
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";
import Search from "./pages/search/Search";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";


// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
