import React, {Component} from 'react';

import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../../components/UI/Button/Button';

class OrderSummery extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummery WillUpdate]');
    }

    render () {
        const ingredientSummery = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTranform: 'captalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            });
        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummery}
                </ul>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxi>
        );
    }
}

export default OrderSummery;