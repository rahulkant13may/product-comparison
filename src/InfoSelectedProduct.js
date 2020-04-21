
import React from 'react';

const InfoSelectedProduct = (props) => {
        return (
            <>
            <td>{props.subFeature.values[props.selectedOption.value]}</td>
            </>
        )
}

export default InfoSelectedProduct;