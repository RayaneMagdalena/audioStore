
// Styles
import styles from "./Cart.module.css";
// Image and Icon
import headset from "../../../public/images/headset.png";
import plus from "../../../public/images/icon-plus.svg";
import minus from "../../../public/images/icon-minus.svg";
import trash from "../../../public/images/icon-trash.svg";
import chevron from "../../../public/images/button-icon-chevron-right.svg";
// Hook
import { useContext } from "react";
// Context
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
   const { cartProducts, increaseQuantity, decreaseQuantity, removeFromCart} = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cardCart}>
        <img src={headset} alt="" className={styles.imageCart} />

        {cartProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.price}</h2>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>
           
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
        ))}
      </div>

      <div>
        <div className={styles.totalPurchase}>
          <p className={styles.totalItems}>Total {cartProducts.length} items</p>
          <p className={styles.totalPrice}>USD 295</p>
        </div>

        <button className={styles.checkoutButton}>
          <p className={styles.titleButton}>Proceed to Checkout</p>
          <img src={chevron} alt="" className={styles.iconChevron} />
        </button>
      </div>
    </div>
  );
};

export default Cart;

