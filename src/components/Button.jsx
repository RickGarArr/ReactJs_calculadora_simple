import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    render(){
        return (
            <button className={this.props.type} onClick={ () => this.props.clickHandler(this.props.text)}>
                <span>{this.props.text}</span>
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}