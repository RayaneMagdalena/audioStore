// Styles
import styles from "./FilterCategory.module.css";

interface FilterCategoryProps {
  selectedCategory: string;
  handleCategorySelect: (category: string) => void;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
  selectedCategory,
  handleCategorySelect,
}) => {

  // if category is Headsets add .active class
  const activeClassHeadsets = `${styles.button} ${
    selectedCategory === "Headsets" ? styles.active : ""
  }`;

  // if category is Headphones add .active class
  const activeClassHeadphones = `${styles.button} ${
    selectedCategory === "Headphones" ? styles.active : ""
  }`;

  return (
    <div className={styles.containerFilter}>
      <button
        onClick={() => handleCategorySelect("Headsets")}
        className={activeClassHeadsets}
      >
        Headsets
      </button>

      <button
        onClick={() => handleCategorySelect("Headphones")}
        className={activeClassHeadphones}
      >
        Headphones
      </button>
    </div>
  );
};

export default FilterCategory;
