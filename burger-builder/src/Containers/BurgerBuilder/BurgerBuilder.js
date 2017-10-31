import React, { Component } from 'react';

import Wrapper from '../../Components/HigherOrder/Wrapper/Wrapper';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    canPurchase: false,
    purchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
    .map((iKey) => { return ingredients[iKey]; })
    .reduce((total, el) => {
      return total + el;
    }, 0);
    this.setState({ canPurchase: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = oldCount + 1;

    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] > 0) {
      const oldCount = this.state.ingredients[type];
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = oldCount - 1;

      const priceDeduction = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice - priceDeduction;

      this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
      this.updatePurchaseState(updatedIngredients);
    }
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert("Continue to Checkout");
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return(
      <Wrapper>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            cancel={this.purchaseCancelHandler} 
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingredients={ this.state.ingredients }/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice} 
          disabled={disabledInfo}
          purchase={this.purchaseHandler}
          canPurchase={this.state.canPurchase}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;