import React from 'react';
import Button from './Button';

export default class OperationsButtons extends React.Component {
    render() {
        return (
            <div className="operations">
                <Button text="+" type="operation" clickHandler={this.props.onClickOperation}/>
                <Button text="-" type="operation" clickHandler={this.props.onClickOperation}/>
                <Button text="*" type="operation" clickHandler={this.props.onClickOperation}/>
                <Button text="/" type="operation" clickHandler={this.props.onClickOperation}/>
                <Button text="=" type="operation" clickHandler={this.props.onClickEqual}/>
            </div>
        );
    }
}