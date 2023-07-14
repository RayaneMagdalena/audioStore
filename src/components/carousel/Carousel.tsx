//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
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
            <ProductCard
              name={product.name}
              price={product.price}
              reviews={product.reviews}
              rating={product.rating}
              renderCardDetails={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
