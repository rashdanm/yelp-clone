import NavBar from "../NavBar/NavBar";
import SubNav from "../SubNav/SubNav";
import styles from "./Search.module.css";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";

function Search() {
  return (
    <div>
      <NavBar />
      <SubNav />
      <SearchResultsSummary />
    </div>
  );
}

export default Search;
