import React from 'react';
import styles from '../Burger/Burger.module.css';
import Burgeringredient from '../Burger/BurgerIngredients/Burgeringredient'

const burger = (props) => { 

    let incomingIngredient = Object.keys(props.ingredient)
        .map(igkey => {
            return [...Array(props.ingredient[igkey])].map((_, i) => {
                return <Burgeringredient key={igkey + i} type={igkey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        });                   //this will give an array

    if (incomingIngredient.length === 0)
    {   
        incomingIngredient=<p>No ingredient is added yet</p>
            }
    return (
        <div className={styles.burger}>
            <Burgeringredient type="bread-top" />
            
            {incomingIngredient}
            <Burgeringredient type="bottom-bread"/>
        </div>
    );
}

export default burger;