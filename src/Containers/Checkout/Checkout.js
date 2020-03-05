import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../Components/Orders/CheckoutSummary/CheckoutSUmmary";

import OrderForm from "../OrderForm/OrderForm";
class Checkout extends Component {
  state = {
    ingredient: {
      meat: 1,
      potato: 1,
      salad: 1,
      cheese: 2
    }
  };

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    for (let param of query.entries()) {
      //['salad' ,'1']
      ingredient[param[0]] = +param[1];
    }
    this.setState({ ingredient: ingredient });
  };

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/Checkout/Order-form");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredient={this.state.ingredient}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/Order-form"}
          component={OrderForm}
        />
      </div>
    );
  }
}

export default Checkout;
