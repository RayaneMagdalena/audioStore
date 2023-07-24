// Styles
import styles from "./CarouselFilter.module.css";
// Image and Icon
import headset from "../../../public/images/headset.png";
import iconArrow from "../../../public/images/icon-arrow-right.svg";
// React-Router
import { Link } from "react-router-dom";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Types
import { Product } from "../../types/productType";

interface CarouselFilterProps {
  products: Product[];
}

const CarouselFilter: React.FC<CarouselFilterProps> = ({ products }) => {
  return (
    <div>
      <Swiper slidesPerView={1.03}>
        {products.map((product) => (
        
        <SwiperSlide key={product.id}>
           
            <Link to={`/products/${product.id}`} className={styles.link}>
             
              <div className={styles.cardItem}>
                <div className={styles.cardDetails}>
                  <h1 className={styles.cardTitle}>{product.name}</h1>

                  <div className={styles.shopNowContainer}>
                    <p className={styles.shopNow}>Shop now</p>

                    <img src={iconArrow} alt="" className={styles.iconArrow} />
                  </div>
                </div>

                <img src={headset} alt="" className={styles.cardImage} />
              </div>
           
            </Link>
         
          </SwiperSlide>
       
       ))}
      </Swiper>
    </div>
  );
};

export default CarouselFilter;
