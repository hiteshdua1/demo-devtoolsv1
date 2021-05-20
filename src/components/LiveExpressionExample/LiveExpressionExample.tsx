import React, { useState } from "react";
import styles from "./LiveExpressionExample.module.css";

const LiveExpressionExample: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.LiveExpressionComponent}>
      <h2>Live expression Example</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment Me</button>
    </div>
  );
} ;

export default LiveExpressionExample;
