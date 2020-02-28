import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../Components/Burger/Burger';
//import BuildControl from '../../Components/Burger/BuildControls/BuildControl/BuildControl';

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
        <div>Burger Content</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
