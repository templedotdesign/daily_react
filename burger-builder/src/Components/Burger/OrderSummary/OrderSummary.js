import React from 'react';

import Wrapper from '../../HigherOrder/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((iKey) => {
    return (
      <li key={iKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {iKey}
        </span>
        : {props.ingredients[iKey]}
      </li>
    );
  })

  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
    </Wrapper>
  );
};

export default orderSummary;