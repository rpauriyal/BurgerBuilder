import React from 'react';
import styles from '../BuildControl/BuildControl.module.css';


const buildcontrol = (props) => (
    <div className={styles.buildcontrol}>
        <div className={styles.label}>{props.label}</div>
        <button className={styles.button}>Add</button>
        <button className={styles.button}>Remove</button>
    </div>

);

export default buildcontrol;