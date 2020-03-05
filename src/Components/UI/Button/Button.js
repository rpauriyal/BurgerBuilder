import React from 'react';
import styles from './Button.module.css';

const button = (props) => (
    <button
        className={[styles.button, styles[props.btntype]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
        </button>
);


export default button;