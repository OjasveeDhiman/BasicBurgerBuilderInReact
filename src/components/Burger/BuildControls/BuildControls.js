import React from 'react';
import classes from '../BuildControls/BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'}
];
const buildControls = (props) => (
        <div className={classes.BuildControls}>
            <h4>Current Price : <strong>{props.price.toFixed(2)}</strong> </h4>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} 
                              label={ctrl.label} 
                              added={() => props.addIngredient(ctrl.type)} 
                              subtracted={() => props.subtractIngredients(ctrl.type)} 
                              disabled={props.disabled[ctrl.type]}/>
            ))}
            <button className={classes.OrderButton} 
                    disabled={!props.purchasable} 
                    onClick={props.orderbtnclick}>
                    ORDER NOW
            </button>
        </div>
);

export default buildControls;