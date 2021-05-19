import React, { useState } from "react";
import styles from "./LiveExpressionExample.module.css";

const LiveExpressionExample: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.LiveExpressionComponent}>
      <h3>Live expression Example</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
} ;

export default LiveExpressionExample;
