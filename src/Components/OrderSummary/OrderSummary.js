import React from 'react';

import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const ordersummary = (props) => {

    const orderingredient = Object.keys(props.ingredient)
        .map(igkey => {
            return (
                <li >
                    <span style={{textTransform:"capitalize", padding:'12px'}}>{igkey}</span> : {props.ingredient[igkey]}
                </li>);
        });
    
    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>Burger</p>
            <ul style={{listStyle:'none'}}>
                    {orderingredient}
            </ul>
            <p>Total Price : {props.price}</p>
            <p>Want to checkout ?</p>
            <Button clicked={props.ordercancel} btntype="danger">CANCEL</Button>
            <Button clicked={props.ordercheckout} btntype="success">CHECKOUT</Button>
        </Aux>
    );

}


export default ordersummary;