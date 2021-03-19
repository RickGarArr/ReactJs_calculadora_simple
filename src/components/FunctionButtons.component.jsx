import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default class FunctionButtons extends React.Component {
    render() {
        return (
            <div className="functions">
                <Button text="Clear" type="function" clickHandler={this.props.onContentClear}/>
                <Button text="Remove" type="function" clickHandler={this.props.onDelete}/>
            </div>
        );
    }   
}

FunctionButtons.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}