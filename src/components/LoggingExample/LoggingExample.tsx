import React from "react";
import styles from "./LoggingExample.module.css";

const logTable = () => {
  console.table([
    {
      first: "René",
      last: "Magritte",
    },
    {
      first: "Chaim",
      last: "Soutine",
      birthday: "18930113",
    },
    {
      first: "Henri",
      last: "Matisse",
    },
  ]);
};

const logGroup = (label: string) => {
  console.group(label);
  console.info("Leo");
  console.info("Mike");
  console.info("Don");
  console.info("Raph");
  console.groupEnd();
};

const customLog = () => {
  const spacing = "5px";
  const styles = `padding: ${spacing}; background-color: blue; color: white; font-style: 
         italic; border: ${spacing} solid crimson; font-size: 2em;`;
  console.log("%cVariety is the spice of life", styles);
};

const logViolation = () => {
  const duration = 3000;
  const start = new Date().getTime();
  while (new Date().getTime() < start + duration) {
    // Block the main thread for 3 seconds.
  }
};

const logInfo = () => {
  console.log("Good Ol console logging!");
};

const logWarn = () => {
  console.warn("Abandon Hope All Ye Who Enter");
};

const logError = () => {
  console.error(`I'm sorry Pal. I'm afraid this isn't feasible.`);
};

const logTime = () => {
  console.time("answer time");
  alert("Click to continue");
  console.timeLog("answer time");
  alert("Do a bunch of other stuff...");
  console.timeEnd("answer time");
};

const logDir = () => {
  console.log(/foo/);
  console.dir(/foo/);
};

const logCount = () => {
  let user = "";

  function greet() {
    console.count(user);
    return "hi " + user;
  }

  user = "bob";
  greet();
  user = "alice";
  greet();
  greet();
  console.count("alice");
};

const LoggingExample: React.FC = () => (
  <div className={styles.LoggingExample}>
    <h2>Logging Example Component</h2>
    <div>
      <button onClick={() => logTable()}>Log Table</button>
      <button onClick={() => logGroup("Some Label")}>Log Group</button>
      <button onClick={() => customLog()}>Custom Log</button>
      <button onClick={() => logViolation()}>Log Violation</button>
      <button onClick={() => logInfo()}>Log Info</button>
      <button onClick={() => logWarn()}>Log Warn</button>
      <button onClick={() => logError()}>Log Error</button>
    </div>
    <div>
      <button onClick={() => logCount()}>Log Count</button>
      <button onClick={() => logTime()}>Log Time</button>
      <button onClick={() => logDir()}>Log Dir</button>
      <button onClick={() => logDir()}>Log Count</button>
    </div>
  </div>
);

export default LoggingExample;
