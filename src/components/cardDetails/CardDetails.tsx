// Styles
import styles from "./CardDetails.module.css";
// Icon
import star from "../../../public/images/star-filled.svg";
import more from "../../../public/images/icon-more-vertical.svg";

interface CardDetailsProps {
  reviews: number;
  rating: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({ rating, reviews }) => {
  return (
    <div className={styles.cardDetails}>
      
      <div className={styles.detailsContainer}>
          <div className={styles.rating}>
            <img src={star} alt="" className={styles.iconStar} />
            <p className={styles.detail}>{rating}</p>
          </div>

          <p className={styles.detail}>{reviews} Reviews</p>
      </div>

      <img src={more} alt="" className={styles.iconMore} />
    
    </div>
  );
};

export default CardDetails;
