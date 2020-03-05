import React, { Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/Burgerbuilder'; 
import Checkout from './Containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/Checkout' component={Checkout}/>
            <Route path='/' exact component={BurgerBuilder}/> 
           </Switch>
        </Layout>
        </div>
    );
  }
}

export default App;
