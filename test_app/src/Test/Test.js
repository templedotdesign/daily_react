import React from 'react';
import classes from './Test.css';

const test = () => {
  let btnClass = '';
  btnClass = classes.red;

  return(
    <div className={classes.test}>
      <p>Test</p>
      <button className={btnClass}>Click Me</button>
    </div>
  );
}

export default test;