import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const Ingredients_price = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon : 0.7       
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon:0
        },
        initialPrice: 4,
        purchasable: false,
        purchasing: false
    }
    
    activateorderbutton (ingredients) {
        const sum = Object.keys(ingredients)
                    .map(ingkey => {
                        return ingredients[ingkey];
                    }).reduce((sum , el) => {
                        return sum + el;
                    }, 0);
                    this.setState({purchasable : sum > 0});
    }

    addIngredientsHandler = (type) => {
        const oldIngredientsCount = this.state.ingredients[type];
        const updateIngredientsCount = oldIngredientsCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateIngredientsCount;
        const priceAddition = Ingredients_price[type];
        const oldPrice = this.state.initialPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({initialPrice: newPrice, ingredients: updatedIngredients});
        this.activateorderbutton(updatedIngredients);
    }

    subtractIngredientsHandler = (type) => {
        const existingIngredientsCount = this.state.ingredients[type];
        if(existingIngredientsCount<=0){
            return;
        }
        const updateexistingIngredientscount = existingIngredientsCount - 1;
        const updateexistingIngredients = {
            ...this.state.ingredients
        }
        updateexistingIngredients[type] = updateexistingIngredientscount;
        const ingredientsPriceInitial = Ingredients_price[type];
        const oldIngredientsPrice = this.state.initialPrice;
        const newIngredientsPrice = oldIngredientsPrice - ingredientsPriceInitial;
        this.setState({initialPrice: newIngredientsPrice, ingredients: updateexistingIngredients});
        this.activateorderbutton(updateexistingIngredients);
    }

    purchasingHandler = () => {
        this.setState({purchasing:true});
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing:false});
    }
    purchasingContinueHandler = () => {
        alert('Continue Purchasing');
    }
    render(){
        
    const disableButton = {
        ...this.state.ingredients
    };

    for(let key in disableButton){
        disableButton[key] = disableButton[key] <=0
    }
        return(
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} 
                                  purchaseCancel={this.purchasingCancelHandler}
                                  purchaseContinue={this.purchasingContinueHandler}
                                  price={this.state.initialPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientsHandler} 
                               subtractIngredients={this.subtractIngredientsHandler} 
                               disabled={disableButton}
                               price={this.state.initialPrice}
                               purchasable={this.state.purchasable}
                               orderbtnclick ={this.purchasingHandler} />
            </Aux>
        );
    };
};


export default BurgerBuilder;