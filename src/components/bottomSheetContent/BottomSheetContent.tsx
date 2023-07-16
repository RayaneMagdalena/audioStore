// Styles
import styles from './BottomSheetContente.module.css';
// Icon
import iconX from '../../../public/images/icon-x.svg';
// Component
import FilterCategory from '../filterCategory/FilterCategory';


interface BottomSheetContentProps {
    setOpen: (open: boolean) => void;
    selectedCategory: string;
    handleCategorySelect: (category: string) => void;
    sortBy: string;
    handleSortBySelect: (sortOption: string) => void;
    applyFilter: () => void;
  }

const BottomSheetContent: React.FC<BottomSheetContentProps> = ({
    setOpen, 
    selectedCategory, 
    handleCategorySelect, 
    sortBy, 
    handleSortBySelect,     
    applyFilter}) => {


  return (
   
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
        className={`${styles.sheetSortButton} ${sortBy === "rating" ? styles.active : "" }`}
        onClick={() => handleSortBySelect("rating")}
      >
        Popularity
      </button>

      <button
        className={`${styles.sheetSortButton} ${sortBy === "newest" ? styles.active : "" }`}
        onClick={() => handleSortBySelect("newest")}
      >
        Newest
      </button>

      <button
        className={`${styles.sheetSortButton} ${sortBy === "oldest" ? styles.active : ""}`}
        onClick={() => handleSortBySelect("oldest")}
      >
        Oldest
      </button>

      <button
        className={`${styles.sheetSortButton} ${sortBy === "price-high" ? styles.active : ""}`}
        onClick={() => handleSortBySelect("price-high")}
      >
        High Price
      </button>

      <button
        className={`${styles.sheetSortButton} ${sortBy === "price-low" ? styles.active : ""}`}
        onClick={() => handleSortBySelect("price-low")}
      >
        Low Price
      </button>

      <button
        className={`${styles.sheetSortButton} ${sortBy === "reviews" ? styles.active : ""}`}
        onClick={() => handleSortBySelect("reviews")}
      >
        Review
      </button>
    </div>

    <button 
    className={styles.sheetButtonApply} 
    onClick={applyFilter}>
      Apply Filter
    </button>
  </div>
    )
}

export default BottomSheetContent