import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (

    <header className={styles.toolbar}>
        <div>Menu</div>
        <Logo/>
        <nav>
            ....
      </nav>
    </header>
);

export default toolbar;