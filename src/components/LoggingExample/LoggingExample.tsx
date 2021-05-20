import React from 'react';
import styles from './LoggingExample.module.css';

const logTable = () => {
  console.table([
    {
      first: 'René',
      last: 'Magritte',
    },
    {
      first: 'Chaim',
      last: 'Soutine',
      birthday: '18930113',
    },
    {
      first: 'Henri',
      last: 'Matisse',
    }
  ]);
}

const logGroup = (label: any) => {
  console.group(label);
  console.info('Leo');
  console.info('Mike');
  console.info('Don');
  console.info('Raph');
  console.groupEnd();
}

const LoggingExample: React.FC = () => (
  <div className={styles.LoggingExample}>
    <h2>Logging Example Component</h2>
    <button onClick={() => logTable()}>Console Table Example</button>
    <button onClick={() => logGroup("Some Label")}>Console Label Example</button>
  </div>
);

export default LoggingExample;
