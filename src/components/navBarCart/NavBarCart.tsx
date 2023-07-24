// Styles
import styles from "./NavBarCart.module.css";
// Icons
import chevron from "../../../public/images/icon-chevron-left.svg";
import trash from "../../../public/images/icon-trash-navBar.svg";
// React-Router
import { useNavigate } from "react-router-dom";
// Hooks 
import { useContext } from "react";
// Context
import { CartContext } from "../../contexts/CartContext";

const NavBarCart = () => {
    const navigate = useNavigate();
    const { cartProducts, removeFromCart } = useContext(CartContext);

    const handleGoBack = () => {
        navigate("/products");
      };

      const handleClearCart = () => {
        // Remove all products from the cart
        cartProducts.forEach((product) => removeFromCart(product.id));
      };
    

  return (
    <div className={styles.navBarContainer}>
        <button 
        onClick={handleGoBack}
        className={styles.button}>
<img src={chevron} alt="" />
        </button>

        <h1 className={styles.title}>Shopping Cart</h1>
        
        <button 
        onClick={handleClearCart}
        className={styles.button}>
<img src={trash} alt="" className={styles.iconTrash} />
        </button>
    </div>
  )
}

export default NavBarCart