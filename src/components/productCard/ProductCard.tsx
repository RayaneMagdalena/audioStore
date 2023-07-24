// Styles
import styles from "./ProductCard.module.css";
// image
import headset from "../../../public/images/headset.png";
// Component
import CardDetails from "../cardDetails/CardDetails";

type ProductCardProps = {
  name: string;
  price: string;
  reviews: number;
  rating: number;
  renderCardDetails:boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  price, 
  rating, 
  reviews, 
  renderCardDetails 
}) => {

  const productPrice = (price: string) => {
    return parseFloat(price.replace(/[^0-9.]+/g, "")).toFixed(0);
  };

  // If card details is rendered add special class
  const cardClasses = `${styles.cardItem} ${renderCardDetails ? styles['special'] : ''}`;
  
  return (



    <div className={cardClasses}>

      <img src={headset} alt="" className={styles.image} />

      <div className={styles.details}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.price}>USD {productPrice(price)}</p>
      </div>

      {renderCardDetails &&  <CardDetails 
      reviews={reviews}
      rating={rating}
      />}
     
    </div>
   
  );
};

export default ProductCard;
