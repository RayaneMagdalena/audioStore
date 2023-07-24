// Styles
import styles from "./Carousel.module.css";
//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// React-Router
import { Link } from "react-router-dom";
// Component
import ProductCard from "../productcard/ProductCard";
// type
import { Product } from "../../types/productType";

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
 
  if (!products) {
    return <div>Loading...</div>;
  }

  // Limits the amount of cards displayed
  const limitedProducts = products.slice(0, 5);

  return (
    <div>
      <Swiper slidesPerView={2.06} spaceBetween={0}>
        {limitedProducts.map((product) => (
          
          <SwiperSlide key={product.id}>
            <Link to={`/products/${product.id}`} className={styles.link}>
             
              <ProductCard
                name={product.name}
                price={product.price}
                reviews={product.reviews}
                rating={product.rating}
                renderCardDetails={false}
              />
          
            </Link>
          </SwiperSlide>
      
      ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
