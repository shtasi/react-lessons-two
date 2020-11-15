import React, { Fragment } from 'react';
import Button from '../../common/Button/Button';

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
      <p><strong>Total price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Fragment>
  );
};

export default orderSummary;