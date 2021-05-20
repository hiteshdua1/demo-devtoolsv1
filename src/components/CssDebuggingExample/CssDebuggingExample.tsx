import React from "react";
import styles from "./CssDebuggingExample.module.css";

const CssDebuggingExample: React.FC = () => (
  <div className={styles.CssDebuggingExample}>
    <h1>Grid Layout</h1>

    <p>This grid layout contains six columns and three rows:</p>

    <div className={styles.GridContainer}>
      <div className={`${styles.GridContainerDiv} ${styles.Item1}`}>Header</div>
      <div className={`${styles.GridContainerDiv} ${styles.Item2}`}>Menu</div>
      <div className={`${styles.GridContainerDiv} ${styles.Item3}`}>Main</div>
      <div className={`${styles.GridContainerDiv} ${styles.Item4}`}>Right</div>
      <div className={`${styles.GridContainerDiv} ${styles.Item5}`}>Footer</div>
    </div>
  </div>
);

export default CssDebuggingExample;
