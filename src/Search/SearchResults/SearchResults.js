import styles from "./SearchResults.module.css";
import SearchResult from "./SearchResult/SearchResult";

function SearchResults() {
  return (
    <div className={styles["search-results"]}>
      <SearchResult />
      <SearchResult />
    </div>
  );
}

export default SearchResults;
