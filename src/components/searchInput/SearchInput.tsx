// Styles
import styles from "./SearchInput.module.css";
// Icon
import iconSearch from "../../../public/images/icon-search.svg";

interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ search, setSearch }) => {
  return (
    <div className={styles.searchContainer}>
      
      <img 
      src={iconSearch} 
      alt=""
      className={styles.iconSearch} />
      
      <input
        type="text"
        placeholder="Search headphone"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.inputSearch}
      />
    </div>
  );
};

export default SearchInput;
