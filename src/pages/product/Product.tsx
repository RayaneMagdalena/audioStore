import styles from './Product.module.css';
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import headset_2 from '../../../public/images/headset_2.svg'
import starReview from '../../../public/images/starReview.svg'
import user from '../../../public/images/user.svg';
import Carousel from "../../components/carousel/Carousel";

const Product = () => {
  const { id } = useParams();

  const { data: products } = useFetch();

  if (!products) {
    return <div>Loading...</div>;
  }

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>No products found</div>;
  }

  return (
    <div className={styles.productContainer}>
      <p className={styles.price}>{product.price}</p>
      <h1 className={styles.title}>{product.name}</h1>

      <div className={styles.productInfo}>
        <button className={styles.buttonInfo}>Overview</button>
        <button className={styles.buttonInfo}>Features</button>
      </div>

<div className={styles.productImageContainer}>
      <img 
      src={headset_2} 
      alt=""
      className={styles.productImage}
      />
      </div>

      <p className={styles.subtitle}>Reviews ({product.reviews.length})</p>

      {product.reviews.map((review) => (
        <div key={review.id} className={styles.productReview}>
          <img 
          src={user} 
          alt=""
          className={styles.reviewImageUser}
          />

          <div>
          <h3 className={styles.reviewUser}>{review.user}</h3>
          <img 
          src={starReview} 
          alt=""
          className={styles.starReview}
          />
          <p className={styles.reviewDescription}>{review.description}</p>
          </div>
        </div>
      ))}

      <p className={styles.subtitle}>Another Product  <Link to='/products' className={styles.seeAll}> See All</Link></p>

      <Carousel 
      products={products}
      />

      <button className={styles.buttonAdd}>Add To Cart</button>
    </div>


  );
};

export default Product;
