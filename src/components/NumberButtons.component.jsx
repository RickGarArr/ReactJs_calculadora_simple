import React from 'react';
import Button from './Button';

import PropTypes from 'prop-types';

export default class NumberButtons extends React.Component {

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    renderButtons() {
        return this.numbers.map(numero => {
            return this.renderButon(numero)
        });
    }

    renderButon(numero) {
        return (
            <Button key={ numero } type="number" text={numero.toString()} clickHandler={this.props.onClickNumber}/>
        );
    }

    render() {
        return (
            <div className="numbers">
                {
                    this.renderButtons(this.props.onClickNumber)
                }
            </div>
        );
    }
} 

NumberButtons.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}