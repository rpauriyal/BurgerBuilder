import React,{Component} from 'react';
import styles from './Burgeringredient.module.css'
import propType from 'prop-types';

class Burgeringredient extends Component { 
    
    render() { 

        let ingredient = null;

        switch (this.props.type){

            case ('bottom-bread'):
                ingredient = <div className={styles.bottombread}></div>;
                break;
            case ('bread-top'):
                ingredient = <div className={styles.breadtop}></div>;
                break;
            case ('meat'):
                ingredient = <div className={styles.meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styles.cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={styles.salad}></div>;
                break;
            case ('potato'):
                ingredient = <div className={styles.potato}></div>;
                break;
        }
        return ingredient;
    }
}
Burgeringredient.propType = {
    type:propType.string.isRequired
};


export default Burgeringredient;