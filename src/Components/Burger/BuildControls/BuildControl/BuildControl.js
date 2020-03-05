import React from 'react';
import styles from '../BuildControl/BuildControl.module.css';


const buildcontrol = ({label,added,remove}) => (
    <div className={styles.buildcontrol}>
        <div className={styles.label}>{label}</div>
        <button className={styles.button} onClick={added}>Add</button>
        <button className={styles.button} onClick={remove}>Remove</button>
    </div>

);

export default buildcontrol;