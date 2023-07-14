// Styles
import styles from "./Search.module.css";
// Hooks
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// Components
import SearchInput from "../../components/searchInput/SearchInput";
import CardSearch from "../../components/cardSearch/CardSearch";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const { data: products } = useFetch();

  if (!products) {
    return <div>Loading...</div>;
  }

// Search Products
  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products by rating
  const sortedProducts = products.sort((a, b) => b.rating - a.rating);

  // Get the three most popular products
  const topRatedProducts = sortedProducts.slice(0, 3);

  return (
    <div className={styles.searchContainer}>
      <SearchInput search={search} setSearch={setSearch} />

      {search.length > 0 ? (
        searchProducts.length > 0 ? (
          // Render the search products
          <div>
            {searchProducts.map((product) => (
              <div key={product.id} className={styles.products}>
                <CardSearch
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews.length}
                />
              </div>
            ))}
          </div>
        ) : (
          // If you don't find products in the search
          <div>
            <p className={styles.notProduct}>Product not found</p>

            <p className={styles.paragrafo}>Popular product</p>

            {topRatedProducts.map((product) => (
              <div key={product.id} className={styles.products}>
                <CardSearch
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews.length}
                />
              </div>
            ))}
          </div>
        )
      ) : (
        // Render only the three most popular products
        <div>
          <p className={styles.paragrafo}>Popular product</p>

          {topRatedProducts.map((product) => (
            <div key={product.id} className={styles.products}>
              <CardSearch
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews.length}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
