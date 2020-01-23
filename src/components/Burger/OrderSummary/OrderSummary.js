import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
                               .map(ingkey => {
                               return (
                                    <li key={ingkey}>
                                        <span style={{textTransform:"capitalize"}}>{ingkey}</span> : {props.ingredients[ingkey]}
                                    </li>
                               );    
                            });
    return(
        <Aux>
            <h2>Your Complete Order</h2>
            <p>A delicious burger with yummy ingredients as follow:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <h3><strong>Total Price : {props.price.toFixed(2)} </strong></h3>
            <p>Continue to Checkout ?</p>
            <Button clicked={props.purchaseCancel} btntype="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinue} btntype="Success">CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;