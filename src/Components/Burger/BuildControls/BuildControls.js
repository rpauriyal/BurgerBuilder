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
         {controls.map(elem => (
             <Buildcontrol key={elem.label} label={elem.label}/>
        ))}
     </div>

 );






export default buildcontrols;
