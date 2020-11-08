import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngr = Object.keys(props.ingredients).map(key => {
    return [...Array(props.ingredients[key])].map((_, idx) => {
      return <BurgerIngredient key={key + idx} type={key} />
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngr.length === 0 
        ? <p>Please add ingredients</p>
        : transformedIngr}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;