import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => (

    <div className={styles.checkoutSummary}>
        <Burger ingredient={props.ingredient} />
        <Button btntype="danger" clicked={props.checkoutCancel}>CANCEL</Button>
        <Button  btntype="success" clicked={props.checkoutContinue}>CHECKOUT</Button>
    </div>
);

export default checkoutSummary;