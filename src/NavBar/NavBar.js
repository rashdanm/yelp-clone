import styles from "./NavBar.module.css";
import logo from "../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <SearchBar
        small
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <button className={`button ${styles["nav-button"]}`}>Sign In</button>
      <button className={`button ${styles["nav-button"]}`}>Register</button>
    </div>
  );
}

export default NavBar;
