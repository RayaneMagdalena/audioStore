import styles from "./CardCart.module.css";
import headset from "../../../public/images/headset.png";
import plus from "../../../public/images/icon-plus.svg";
import minus from "../../../public/images/icon-minus.svg";
import trash from "../../../public/images/icon-trash.svg";

import { Product } from "../../types/productType";

interface CardCartProps {
  product: Product;
  productPrice: (price: string) => string;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CardCart: React.FC<CardCartProps> = ({
  product,
  productPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  
  return (
    <div className={styles.cardCart}>
      <img src={headset} alt="" className={styles.imageCart} />

      <div>
        <h1 className={styles.title}>{product.name}</h1>

        <p className={styles.price}>USD {productPrice(product.price)}</p>

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
  );
};

export default CardCart;
