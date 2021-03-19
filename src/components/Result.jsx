import React from 'react';
import PropTypes from 'prop-types';

export default class Result extends React.Component {
    render() {
        return(
            <div className="result">
                <span className="number-display">{ this.props.value }</span>
            </div>
        );
    }
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}