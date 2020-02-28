import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component {
  
  // constructor(props)
  // {
  //   super(props);
  //   this.state = { };
  //  }

  state = {
    ingredient:{
      meat: 0,
      potato: 0,
      salad: 0,
      cheese:0
    }
    }
  render() {
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
