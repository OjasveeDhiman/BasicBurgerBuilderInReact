import React from 'react';
// import classes from './Burgeringredient/Burgeringredient.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingkeys => {
        return [...Array(props.ingredients[ingkeys])].map((_, i) => {
            return <BurgerIngredient key={ingkeys + i} type={ingkeys}/>
        });        
    })
    .reduce((arr, el) => { //arr is the previous value and el is the current value
            return arr.concat(el);
        }, []);        
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please add some Ingredients</p>;
        }    
    return(
        <div className={classes.Burger}>
        {/* type from the switch cases in BurgerIngredient.js */}
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;