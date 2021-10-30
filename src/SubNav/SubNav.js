import styles from "./SubNav.module.css";
import SubNavItem from "./SubNavItem/SubNavItem";

function SubNav() {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div className="left">
          <SubNavItem label="Restaurant" icon="fa-utensils" />
          <SubNavItem label="Home Services" icon="fa-home" />
          <SubNavItem label="Auto Services" icon="fa-car-side" />
          <SubNavItem label="More" icon="fa-info" showRightBorder />
        </div>
        <div className="right">
          <button
            className={`button ${styles["subnav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen" />
            </span>
            <span>Write a Review</span>
          </button>
          <button className={`button ${styles["subnav-button"]}`}>
            <span className="icon">
              <i className="fas fa-hotel" />
            </span>
            <span>For Businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubNav;
