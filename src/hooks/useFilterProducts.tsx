import { useState, useEffect } from "react";
import { Product } from "../types/productType";

interface FilteredProducts {
  filteredProducts: Product[];
  applyFilter: (category: string, sortOption: string) => void;
}

export const useFilterProducts = (
    initialProducts: Product[],
    setOpen: (open: boolean) => void
    ): FilteredProducts => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Headsets");
  const [sortBy, setSortBy] = useState<string>("rating");

  useEffect(() => {
    filterAndSortProducts();
  }, [products, selectedCategory, sortBy]);

  const filterAndSortProducts = () => {
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
    setFilteredProducts(sortedProducts);
};

const applyFilter = (category: string, sortOption: string) => {
    setSelectedCategory(category);
    setSortBy(sortOption);
    setOpen(false);
    console.log("olaaaaaaaaaaa")
  };

  return {
    filteredProducts,
    applyFilter,
  };
};
