// Styles
import styles from "./Cart.module.css";
// Image and Icon
import headset from "../../../public/images/headset.png";
import plus from "../../../public/images/icon-plus.svg";
import minus from "../../../public/images/icon-minus.svg";
import trash from "../../../public/images/icon-trash.svg";
import chevron from "../../../public/images/button-icon-chevron-right.svg";
// Hook
import { useContext, useMemo } from "react";
// React-Router
import { useNavigate } from "react-router-dom";
// Component
import NavBarCart from "../../components/navBarCart/NavBarCart";
// Context
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
const navigate = useNavigate();

const handleBacktoStore = () => {
  navigate("/products")
}

  const { cartProducts, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const totalProductPrice = (product) => {
    const productPrice = parseFloat(product.price.replace(/[^0-9.]+/g, ""));
    return (productPrice * product.quantity).toFixed(0);
  };

  const totalPrice = useMemo(() => {
    const total = cartProducts.reduce((accumulator, product) => {
      const productPrice = parseFloat(product.price.replace(/[^0-9.]+/g, ""));
      return accumulator + productPrice * product.quantity;
    }, 0);

    return total.toFixed(0);
  }, [cartProducts]);

  const totalItems = useMemo(() => {
    const total = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return total;
  }, [cartProducts]);

  return (
    <div>
      <NavBarCart />
      <div className={styles.cardCartContainer}>
        {cartProducts.length === 0 ? (
          // Carrinho vazio
          <div className={styles.emptyCart}>
            <p className={styles.emptyCartMessage}>Your cart is empty :( </p>
            <button className={styles.emptyCartButton}
            onClick={handleBacktoStore}
            >Back to store</button>
          </div>
        ) : (
          // Carrinho com produtos
          <div>
            {cartProducts.map((product) => (
              <div key={product.id} className={styles.cardCart}>
                <img src={headset} alt="" className={styles.imageCart} />

                <div>
                  <h1 className={styles.title}>{product.name}</h1>

                  <p className={styles.price}>USD {totalProductPrice(product)}</p>

                  <div className={styles.cardFunctions}>
                    <div className={styles.quantityFunction}>
                      <img
                        src={minus}
                        alt=""
                        className={styles.iconMinus}
                        onClick={() => decreaseQuantity(product.id)}
                      />

                      <p className={styles.quantifyItem}>{product.quantity}</p>

                      <img
                        src={plus}
                        alt=""
                        className={styles.iconPlus}
                        onClick={() => increaseQuantity(product.id)}
                      />
                    </div>

                    <img
                      src={trash}
                      alt=""
                      className={styles.iconDelete}
                      onClick={() => removeFromCart(product.id)}
                    />
                  </div>
                </div>
              </div>
            ))}

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