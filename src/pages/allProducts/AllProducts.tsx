// Styles
import styles from "./AllProducts.module.css";
// Icon
import iconSlider from "../../../public/images/icon-sliders.svg";
import iconX from "../../../public/images/icon-x.svg";
// React-Router
import { Link } from "react-router-dom";
// Hooks
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
// BottomSheet
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
// Components
import ProductCard from "../../components/productcard/ProductCard";
import FilterCategory from "../../components/filterCategory/FilterCategory";
import { Product } from "../../types/productType";

const AllProducts = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Headsets");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [filteredProducts, setFilteredProducts] = useState<
    Product[]
  >([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { data: products } = useFetch();

  useEffect(() => {
    if (products) {
      setAllProducts(products); // products without applied filter
    }
  }, [products]);

  if (!products) {
    return <div>Loading...</div>;
  }

  // Update selected category
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Update selected sorting option
  const handleSortBySelect = (sortOption: string) => {
    setSortBy(sortOption);
  };

  // Filter and ordering of products
  const applyFilter = () => {
    const filteredProductsCategory = products.filter(
      (product) => product.category === selectedCategory
    );

    let sortedProducts = filteredProductsCategory.slice();

    if (sortBy === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      sortedProducts.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (sortBy === "oldest") {
      sortedProducts.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (sortBy === "price-high") {
      sortedProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceB - priceA;
      });
    } else if (sortBy === "price-low") {
      sortedProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });
    } else if (sortBy === "reviews") {
      sortedProducts.sort((a, b) => b.reviews.length - a.reviews.length);
    }
    setOpen(false);
    setFilteredProducts(sortedProducts);
  };

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
              <button
                className={`${styles.sheetSortButton} ${
                  sortBy === "rating" ? styles.active : ""
                }`}
                onClick={() => handleSortBySelect("rating")}
              >
                Popularity
              </button>

              <button
                className={`${styles.sheetSortButton} ${
                  sortBy === "newest" ? styles.active : ""
                }`}
                onClick={() => handleSortBySelect("newest")}
              >
                Newest
              </button>

              <button
                className={`${styles.sheetSortButton} ${
                  sortBy === "oldest" ? styles.active : ""
                }`}
                onClick={() => handleSortBySelect("oldest")}
              >
                Oldest
              </button>

              <button
                className={`${styles.sheetSortButton} ${
                  sortBy === "price-high" ? styles.active : ""
                }`}
                onClick={() => handleSortBySelect("price-high")}
              >
                High Price
              </button>

              <button
                className={`${styles.sheetSortButton} ${
                  sortBy === "price-low" ? styles.active : ""
                }`}
                onClick={() => handleSortBySelect("price-low")}
              >
                Low Price
              </button>

              <button
                className={`${styles.sheetSortButton} ${
                  sortBy === "reviews" ? styles.active : ""
                }`}
                onClick={() => handleSortBySelect("reviews")}
              >
                Review
              </button>
            </div>

            <button className={styles.sheetButtonApply} onClick={applyFilter}>
              Apply Filter
            </button>
          </div>
        </BottomSheet>
      </div>

      {/* ------------------CARDS------------------------*/}
      <div className={styles.cards}>
        {(filteredProducts.length > 0
          ? filteredProducts
          : allProducts
        ).map((product) => (
          <Link
            to={`/products/${product.id}`}
            className={styles.link}
            key={product.id}
          >
            <div className={styles.card}>
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
