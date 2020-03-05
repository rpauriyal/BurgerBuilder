import React from 'react';
import Buildcontrol from './BuildControl/BuildControl';
import styles from '../BuildControls/BuildContols.module.css';


const controls = [
    { label: "Meat", type: "meat" },
    { label: "Potato", type: "potato" },
    { label: "Cheese", type: "cheese" },
    {label:"Salad",type:"salad"}

]
 const buildcontrols = (props) => (
        
     <div className={styles.buildcontrols}>

         <p>Current Price : {props.price}</p>
         {controls.map(elem => (
             <Buildcontrol
                 key={elem.label}
                 label={elem.label}
                 added={() => props.ingredientadd(elem.type)}
                 remove={()=>props.ingredientdelete(elem.type)}
             />
         ))}
         
         <button
             className={styles.orderButton}
             disabled={!props.purchaseable}
             onClick={props.ordered}>ORDER NOW</button>
     </div>

 );

export default buildcontrols;
