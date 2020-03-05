import React from 'react';
import burgerlogo from '../../assests/images/burger.png'
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.logo}>
        <img src={burgerlogo} alt="mybrger"/>
    </div>
);

export default logo;