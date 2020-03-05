import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Loader from '../../Components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import ordersummary from "../../Components/OrderSummary/OrderSummary";


const INGREDIENT_PRICE = {
  meat: 20,
  potato: 10,
  salad: 5,
  cheese:15
}
class BurgerBuilder extends Component {
  
  // constructor(props)
  // {
  //   super(props);
  //   this.state = { };
  //  }

  state = {
    ingredient:null,
    totalprice: 50,
    purchaseable: false,
    ordered: false,
    loading:false
    }

  componentDidMount=()=>
  {
    axios.get('https://react-burger-app-9baca.firebaseio.com/Ingredient.json')
      .then(response  => {
        this.setState({ ingredient: response.data });
      });
  }

   placeOrder(ingredient){ 
  
     const sum = Object.keys(ingredient)
      .map(igkey => {
        return ingredient[igkey];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
     
     this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredient[type];
    const updatecount = oldcount + 1;
    const updatedIngredient = {
      ...this.state.ingredient
    };
    updatedIngredient[type] = updatecount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldprice = this.state.totalprice;
    const newprice = oldprice + priceAddition;  

    this.setState({ totalprice: newprice, ingredient: updatedIngredient });
    this.placeOrder(updatedIngredient);

  }

  removeIngredientHandler=(type)=>
  {
    const oldcount = this.state.ingredient[type];
    if (oldcount <= 0)
    {
      return;
      }
    const updatecount = oldcount - 1;
    const updatedIngredient = {
      ...this.state.ingredient
    };
    updatedIngredient[type] = updatecount;
    const pricededuction = INGREDIENT_PRICE[type];
    const oldprice = this.state.totalprice;
    const newprice = oldprice -pricededuction;  

    this.setState({ totalprice: newprice, ingredient: updatedIngredient });
    this.placeOrder(updatedIngredient);
  }

  orderHandler = () => {
    this.setState({ ordered: true });
  }

  orderremoveHandler = () => {
    this.setState({ ordered: false });  
  }

  ordercheckoutHandler =()=>{
    //alert("You checked Out");
    // this.setState({loading:true})
    // const order = {
    //   ingredients:this.state.ingredient,
    //   price: this.state.totalprice,
    //   customer: {
    //     name: 'rahul pauriyal',
    //     address: {
    //       street: 'abcdss',
    //       pincode:13213
    //     },
    //     email:'rahulpauriyal@gmail.com'
    //   }
    // }
    // axios.post('/orders.json', order)
    //   .then(response => {
    //     this.setState({loading:false})
    //   })
    //   .catch(error => {
    //     this.setState({loading:false})
    //   });

    const queryparam = [];
    
    for(let i in this.state.ingredient)
    {
      queryparam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredient[i]));

    }
    const querystring = queryparam.join('&');
    this.props.history.push({
      pathname: '/Checkout',
      search: '?' + querystring
    });
  }

  render() {

    let orderSummary = null;
    let burger = <Loader/>;
    if (this.state.ingredient)
    {
      burger = (
        <Aux>
          <Burger ingredient={this.state.ingredient} />
          <BuildControls
            ingredientadd={this.addIngredientHandler}
            ingredientdelete={this.removeIngredientHandler}
            purchaseable={this.state.purchaseable}
            ordered={this.orderHandler}
            price={this.state.totalprice}
          />
        </Aux>);
      orderSummary = <OrderSummary
        ingredient={this.state.ingredient}
        price={this.state.totalprice}
        ordercancel={this.orderremoveHandler}
        ordercheckout={this.ordercheckoutHandler}
      />
    }
    if (this.state.loading)
    {
      orderSummary = <Loader />
      alert('Your order is placed');
    }
    

    return (
      <Aux>
        <Modal show={this.state.ordered} modalremove={this.orderremoveHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default BurgerBuilder;
