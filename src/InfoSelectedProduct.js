import React from 'react';

export default class InfoSelectedProduct extends React.Component {
    render() {
        return (
            <>
            <td>{this.props.subFeature.values[this.props.selectedOption.value]}</td>
            </>
        )
    }
}