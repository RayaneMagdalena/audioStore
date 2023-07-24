import SignIn from "../../pages/signIn/SignIn";
import SignUp from "../../pages/signUp/SignUp";
import Home from "../../pages/home/Home";
import Cart from "../../pages/cart/Cart";
import Search from "../../pages/search/Search";
import AllProducts from "../../pages/allProducts/AllProducts";
import Product from "../../pages/product/Product";

import { Routes, Route, useLocation } from "react-router-dom";

import { animated, useTransition, useSpring } from "react-spring";
import "./AnimatedRoutes.module.css";


const AnimatedRoutes = () => {
  const location = useLocation();

  // const transitions = useTransition(location, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });

  const transitions = useTransition(location, {
    from: { opacity: 1, transform: "translate3d(100%,0,0)" }, // Inicia a partir da esquerda (fora da tela)
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" }, // Entra na tela deslizando da esquerda para a direita
    leave: { opacity: 1, transform: "translate3d(-100%,0,0)" }, // Sai da tela deslizando da direita para a esquerda
    config: { duration: 200 }
  });

  const isForward = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, reset: true, reverse: !transitions.in });

return transitions((props, item) => (
  <div>

    <animated.div style={props} className="page">
      <Routes location={item}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </animated.div>

    <animated.div style={isForward} className="page" />
  </div>
  ));

};

export default AnimatedRoutes;
