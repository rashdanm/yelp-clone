import styles from "./TopNav.module.css";

function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles["left"]}>
        <span>Write a review</span>
        <span>Events</span>
      </div>
      <div className={styles["right"]}>
        <span>Login</span>
        <button className="button">Sign Up</button>
      </div>
    </div>
  );
}

export default TopNav;
