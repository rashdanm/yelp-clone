import styles from "./SearchResults.module.css";
import SearchResult from "./SearchResult/SearchResult";

function SearchResults(props) {
  if (!props.businesses || !props.businesses.length) {
    return <div></div>;
  }

  const searchResults = props.businesses.map((b) => (
    <SearchResult key={b.id} business={b} />
  ));
  return <div className={styles["search-results"]}>{searchResults}</div>;
}

export default SearchResults;
