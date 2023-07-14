// Styles
import styles from "./AllProducts.module.css";
// Icon
import iconSlider from "../../../public/images/icon-sliders.svg";
import iconX from "../../../public/images/icon-x.svg";
// React-Router
import { Link } from "react-router-dom";
// Hooks
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
// BottomSheet
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
// Components
import ProductCard from "../../components/productcard/ProductCard";
import FilterCategory from "../../components/filterCategory/FilterCategory";


const AllProducts = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Headsets");
  
  const { data: products } = useFetch();

  if (!products) {
    return <div>Loading...</div>;
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // const filteredProducts = products.filter(
  //   (product: Product) => product.category === selectedCategory
  // );

  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <p className={styles.feature}>Featured products</p>
        <h1 className={styles.title}>See all products</h1>

        <button onClick={() => setOpen(true)} className={styles.button}>
          <img src={iconSlider} alt="" className={styles.iconSlider} />
          Filter
        </button>

        <BottomSheet open={open}>
          <div className={styles.buttonSheet}>
            <div className={styles.sheetHeader}>
              <h2 className={styles.sheetTitle}>Filter</h2>
              <button
                onClick={() => setOpen(false)}
                className={styles.sheetButtonX}
              >
                <img src={iconX} alt="" className={styles.sheetIconX} />
              </button>
            </div>

            <p className={styles.sheetSubtitle}>Category</p>
            <FilterCategory
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
            />

            <p className={styles.sheetSubtitle}>Sort By</p>
            <div className={styles.sheetButtonsSort}>
              <button className={styles.sheetSortButton}>Popularity</button>
              <button className={styles.sheetSortButton}>Newest</button>
              <button className={styles.sheetSortButton}>Oldest</button>
              <button className={styles.sheetSortButton}>High Price</button>
              <button className={styles.sheetSortButton}>Low Price</button>
            </div>

            <button className={styles.sheetButtonApply}>Apply Filter</button>
          </div>
        </BottomSheet>
      </div>

      {/* ------------------CARDS------------------------*/}
      <div className={styles.cards}>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} className={styles.link}>
            <div key={product.id} className={styles.card}>
              <ProductCard
                name={product.name}
                price={product.price}
                reviews={product.reviews.length}
                rating={product.rating}
                renderCardDetails={true}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
