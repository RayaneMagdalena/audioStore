// Styles
import styles from "./Cart.module.css";
// Image and Icon
import chevron from "../../../public/images/button-icon-chevron-right.svg";
// Hook
import { useContext, useMemo } from "react";
// React-Router
import { useNavigate } from "react-router-dom";
// Component
import NavBarCart from "../../components/navBarCart/NavBarCart";
import CardCart from "../../components/cardCart/CardCart";
// Context
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
const navigate = useNavigate();

// button route
const handleBacktoStore = () => {
  navigate("/products")
}

  const { cartProducts, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

    const productPrice = (price: string) => {
      return parseFloat(price.replace(/[^0-9.]+/g, "")).toFixed(0);
    };

    // Total purchase price
  const totalPrice = useMemo(() => {
    const total = cartProducts.reduce((accumulator, product) => {
      const productPrice = parseFloat(product.price.replace(/[^0-9.]+/g, ""));
      return accumulator + productPrice * product.quantity;
    }, 0);

    return total.toFixed(0);
  }, [cartProducts]);

  // Total purchase items
  const totalItems = useMemo(() => {
    const total = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return total;
  }, [cartProducts]);

  return (
    <div>
      <NavBarCart />
      <div>
        {cartProducts.length === 0 ? (
          // Empty Cart
          <div className={styles.emptyCart}>
            <p className={styles.emptyCartMessage}>Your cart is empty :( </p>
            <button className={styles.emptyCartButton}
            onClick={handleBacktoStore}
            >Back to store</button>
          </div>
        ) : (
          // Cart with products
          <div className={styles.cardCartContainer}>
            <div className={styles.cards}>
            {cartProducts.map((product) => (
              <div key={product.id} >
                <CardCart
                 product={product}
                 productPrice={productPrice}
                 increaseQuantity={increaseQuantity}
                 decreaseQuantity={decreaseQuantity}
                 removeFromCart={removeFromCart}
                 />
              </div>
            ))}
            </div>

            <div>
              <div className={styles.buyInfo}>
                <p className={styles.totalItems}>Total {totalItems} items</p>
                <p className={styles.totalPrice}>USD {totalPrice}</p>
              </div>

              <button className={styles.checkoutButton}>
                <p className={styles.titleButton}>Proceed to Checkout</p>
                <img src={chevron} alt="" className={styles.iconChevron} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;