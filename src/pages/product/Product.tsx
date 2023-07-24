// Styles
import styles from "./Product.module.css";
// images and icons
import headset_2 from "../../../public/images/headset_2.svg";
// hooks
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// Components
import Reviews from "../../components/reviews/Reviews";
import Carousel from "../../components/carousel/Carousel";
import  NavBar  from "../../components/navBar/NavBar";
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
  // Params and Context
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // State and hooks
  const [activeButton, setActiveButton] = useState("overview");
  const { data: products } = useFetch();

  //  Event handlers
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    navigate("/cart");
  };

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

// Data and loading checks
  if (!products) {
    return <div>Loading...</div>;
  }

  // Find product by id
  const product = products.find((product) => product.id === parseInt(id));

  const productPrice = (price: string) => {
    return parseFloat(price.replace(/[^0-9.]+/g, "")).toFixed(0);
  };


  if (!product) {
    return <div>No products found</div>;
  }

  return (
    <div className={styles.productContainer}>

      <NavBar />
      
      <p className={styles.price}>USD {productPrice(product.price)}</p>
      <h1 className={styles.title}>{product.name}</h1>

      <div className={styles.productInfo}>
        <button
          className={styles.buttonInfo}
          onClick={() => handleButtonClick("overview")}
        >
          Overview
        </button>
        
        {activeButton === "overview" && <div className={styles.lineOverview} />}

        <button
          className={styles.buttonInfo}
          onClick={() => handleButtonClick("features")}
        >
          Features
        </button>
        
        {activeButton === "features" && <div className={styles.lineFeatures} />}
      </div>

      {activeButton === "overview" && (
        <div>
          <div className={styles.productImageContainer}>
            <img 
            src={headset_2} 
            alt="" 
            className={styles.productImage} 
            />
          </div>

          <p className={styles.subtitleReview}>
            Reviews ({product.reviews.length})
          </p>

          <Reviews reviews={product.reviews} />

          <div className={styles.carouselContainer}>
            <p className={styles.subtitle}>
              Another Product
              <Link to="/products"
               className={styles.seeAll}>
                See All
              </Link>
            </p>

            <Carousel products={products} />
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className={styles.buttonAdd}
          >
            Add To Cart
          </button>
        </div>
      )}

      {activeButton === "features" && (
        <div className={styles.pageDetails}>
          <h2 className={styles.titleDetails}>Highly Detailed Audio</h2>
          <p className={styles.contentDetails}>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
