import React from 'react';

import classes from './Burger.css';

import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  let ingredientsArray = Object.keys(props.ingredients)
  .map((iKey) => {
    return [...Array(props.ingredients[iKey])]
    .map((_, i) => {
      return <Ingredient key={iKey + i} type={iKey}/>
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  if(ingredientsArray.length === 0) {
    ingredientsArray = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top"/>
      {ingredientsArray}
      <Ingredient type="bread-bottom"/>
    </div>
  );
} 

export default burger;