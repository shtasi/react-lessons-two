import React, { Fragment } from 'react';

const orderSummary = (props) => {
  const ingrSum = Object.keys(props.ingredients)
                 .map(key => {
                 return (
                  <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                  </li>);
                 })
  
  return (
    <Fragment>
      <h3>Your order</h3>
      <p>Ingredients of your order:</p>
      <ul>
        {ingrSum}
      </ul>
      <p>Continue...</p>
    </Fragment>
  );
};

export default orderSummary;