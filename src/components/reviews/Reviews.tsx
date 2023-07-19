// Styles
import styles from "./Reviews.module.css";
// Icon
import user from "../../../public/images/user.svg";
import filledStar from "../../../public/images/star-filled.svg";
import emptyStar from "../../../public/images/star-outlined.svg";

interface ReviewsProps {
  reviews: Review[];
}

interface Review {
  id: number;
  user: string;
  rating: number;
  description: string;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
   
    // Render the stars according to the rating score
  const renderStars = (rating: number) => {
    const filledStars = rating;
    const emptyStars = 5 - filledStars;

    const stars = [];

    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <img
          key={`filled-star-${i}`}
          src={filledStar} 
          alt="Filled Star"
          className={styles.starReview}
        />
      );
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img
          key={`empty-star-${i}`}
          src={emptyStar}
          alt="Empty Star"
          className={styles.starReview}
        />
      );
    }

    return stars;
  };

  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className={styles.productReview}>
          <img src={user} alt="" className={styles.reviewImageUser} />
          <div>
            <h3 className={styles.reviewUser}>{review.user}</h3>
            <div className={styles.starReviewContainer}>
              {renderStars(review.rating)}
            </div>
            <p className={styles.reviewDescription}>{review.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Reviews;
