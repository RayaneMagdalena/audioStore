// Styles
import styles from "./NavBarCart.module.css";
// Icons
import chevron from "../../../public/images/icon-chevron-left.svg";
import trash from "../../../public/images/icon-trash.svg";
// React-Router
import { useNavigate } from "react-router-dom";
// Hooks 
import { useContext } from "react";
// Context
import { CartContext } from "../../contexts/CartContext";
const NavBarCart = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
      };

  return (
    <div className={styles.navBarContainer}>
        <button 
        onClick={handleGoBack}
        className={styles.button}>
<img src={chevron} alt="" />
        </button>

        <h1 className={styles.title}>Shopping Cart</h1>
        
        <button className={styles.button}>
<img src={trash} alt="" />
        </button>
    </div>
  )
}

export default NavBarCart