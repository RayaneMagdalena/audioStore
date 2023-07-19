// Styles
import styles from "./Product.module.css";
// images and icons
import headset_2 from "../../../public/images/headset_2.svg";
// hooks
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
// Components
import Reviews from "../../components/reviews/Reviews";
import Carousel from "../../components/carousel/Carousel";
// context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  reviews: Review[];
}

interface Review {
  id: number;
  user: string;
  rating: number;
  description: string;
}

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { data: products } = useFetch();

  //  Add product to cart
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    navigate("/cart");
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  // Find product by id
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
        <img src={headset_2} alt="" className={styles.productImage} />
      </div>

      <p className={styles.subtitle}>Reviews ({product.reviews.length})</p>

      <Reviews reviews={product.reviews} />

      <p className={styles.subtitle}>
        Another Product{" "}
        <Link to="/products" className={styles.seeAll}>
          {" "}
          See All
        </Link>
      </p>

      <Carousel products={products} />

      <button
        onClick={() => handleAddToCart(product)}
        className={styles.buttonAdd}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
