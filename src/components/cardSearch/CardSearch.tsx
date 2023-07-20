// Styles
import styles from "./CardSearch.module.css";
// Image and Icon
import headset from "../../../public/images/headset.png";
import star from "../../../public/images/star-filled.svg";
import more from "../../../public/images/icon-more-vertical.svg";

interface CardSearchProps {
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

const CardSearch: React.FC<CardSearchProps> = ({
  name,
  price,
  rating,
  reviews,
}) => {

  return (
    <div className={styles.cardItem}>
      <div className={styles.imageContainer}>
        <img 
        src={headset} 
        alt="" 
        className={styles.cardImage} 
        />
      </div>

      <div className={styles.cardInfo}>
        
         <h1 className={styles.cardTitle}>{name}</h1>
         <p className={styles.cardPrice}>{price}</p>

         <div className={styles.cardDetails}>
           <div className={styles.detailsContainer}>
             <img 
             src={star} 
             alt="" 
             className={styles.iconStar} 
             />
             <p className={styles.detail}>{rating}</p>
             <p className={styles.detail}>{reviews} Reviews</p>
           </div>

           <img 
           src={more} 
           alt="" 
           className={styles.iconMore} 
           />
        </div>
     
      </div>
    </div>
  );
};

export default CardSearch;
