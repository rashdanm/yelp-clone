import NavBar from "../NavBar/NavBar";
import SubNav from "../SubNav/SubNav";
import styles from "./Search.module.css";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";
import useReactRouter from "use-react-router";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";

function Search() {
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  function search(term, location) {
    console.log("i am called");
    performSearch({ term, location });
  }
  return (
    <div>
      <NavBar term={term} location={locationParam} search={search} />
      <SubNav />
      <SearchResultsSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
}

export default Search;
