import React, { Component } from 'react';

import PropTypes from 'prop-types';

import classes from './Ingredient.css';

class Ingredient extends Component {
  render() {
    let current = null;
    
    switch(this.props.type) {
      case ('bread-bottom'):
        current = <div className={ classes.BreadBottom }></div>;
        break;
      case ('bread-top'):
        current = (
          <div className={ classes.BreadTop }>
            <div className={ classes.Seeds1 }></div>
            <div className={ classes.Seeds2 }></div>
          </div>
        );
        break;
      case ('meat'):
        current = <div className={ classes.Meat }></div>;
        break;
      case ('cheese'):
        current = <div className={ classes.Cheese }></div>;
        break;
      case ('salad'):
        current = <div className={ classes.Salad }></div>;
        break;
      case ('bacon'):
        current = <div className={ classes.Bacon }></div>;
        break;
      default:
        current = null;
        break;
    }
    return current;
  }
  
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;