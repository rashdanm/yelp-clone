import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={`button is-loading is-large ${styles.spinner}`}>
      Loading
    </div>
  );
}

export default Spinner;
