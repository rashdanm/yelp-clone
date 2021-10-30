import NavBar from "../NavBar/NavBar";
import SubNav from "../SubNav/SubNav";
import styles from "./Search.module.css";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";

function Search() {
  return (
    <div>
      <NavBar />
      <SubNav />
      <SearchResultsSummary />
      <SearchResults />
    </div>
  );
}

export default Search;
