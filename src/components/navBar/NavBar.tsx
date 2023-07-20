// Styles
import styles from "./NavBar.module.css";
// Icon
import chevronLeft from "../../../public/images/icon-chevron-left.svg";
import shoppingCart from "../../../public/images/icon-shopping-cart.svg";
// React-Router
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  title: string;
 }

const NavBar: React.FC<NavBarProps> = ({ title }) => {
 
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.navBarContainer} onClick={handleGoBack}>
      <button className={styles.button}>
        <img src={chevronLeft} className={styles.icon} alt="" />
      </button>

      <h1 className={styles.title}>{title}</h1>

      <button className={styles.button} onClick={handleGoToCart}>
        <img src={shoppingCart} className={styles.icon} alt="" />

       
      </button>
    </div>
  );
};

export default NavBar;
