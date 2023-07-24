// Styles
import styles from "./NavBar.module.css";
// Icon
import chevronLeft from "../../../public/images/icon-chevron-left.svg";
import shoppingCart from "../../../public/images/icon-shopping-cart.svg";
// React-Router
import { useNavigate } from "react-router-dom";
// Context
import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/CartContext";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const { cartProducts } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = useMemo(() => {
    const total = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return total;
  }, [cartProducts]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.navBarContainer}>
      <button onClick={handleGoBack} className={styles.button}>
        <img src={chevronLeft} alt="" className={styles.icon} />
      </button>

      <h1 className={styles.title}>{title}</h1>

      <button onClick={handleGoToCart} className={styles.button}>
        <img src={shoppingCart} alt="" className={styles.icon} />

        {totalItems > 0 && (
          <div className={styles.quantityProducts}>
            <p>{totalItems}</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default NavBar;
