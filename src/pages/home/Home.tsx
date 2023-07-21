// styles
import styles from "./Home.module.css";
// React-Router
import { Link } from "react-router-dom";
// Hooks
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// Components
import NavBarHome from "../../components/navBarHome/NavBarHome";
import SearchInput from "../../components/searchInput/SearchInput";
import Carousel from "../../components/carousel/Carousel";
import FilterCategory from "../../components/filterCategory/FilterCategory";
import CarouselFilter from "../../components/carouselFilter/CarouselFilter";



const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Headsets");

  const { data: products } = useFetch();

  if (!products) {
    return <div>Loading...</div>;
  }

  // filtering products based on category
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts  = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div>
      <div className={styles.greetingAndSearch}>
      <NavBarHome />
        <p className={styles.greeting}>Hi, Andrea</p>

        <h1 className={styles.title}>What are you looking for today?</h1>

        <Link to="/search">
        
          <SearchInput 
          search={search} 
          setSearch={setSearch} />
        
        </Link>
      </div>

      <div className={styles.carouselsContainer}>
       
        <FilterCategory
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
       
        <CarouselFilter 
        products={filteredProducts} />

        <p className={styles.feature}>
          Featured Products
         
          <Link to="/products" className={styles.seeAll}>
            See All
          </Link>
        </p>

        <Carousel 
        products={products}
        />
     
      </div>
    </div>
  );
};

export default Home;
