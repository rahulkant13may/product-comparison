import React from 'react';

export default class SelectedProductImage extends React.Component {

    closeIconClicked = () => {
        this.props.closeIconClicked(this.props.selectedOption)
    }
    
    render() {
        return (
            this.props.productFeature
            ?
            <th className="img_wrp">
            <span href="#" className="closeIcon" onClick ={this.closeIconClicked}> X </span>
            <img 
                src={this.props.productFeature.compareSummary.images[this.props.selectedOption.value]}
                alt="W3Schools.com"
                style={{width:"200px", height:"200px",marginTop: "35px"}}></img>
                <p>{this.props.productFeature.compareSummary.titles[this.props.selectedOption.value].title}</p>
                <p>
                &#8377;
                {this.props.productFeature.compareSummary.productPricingSummary[this.props.selectedOption.value].finalPrice}
                {'\u00A0'}
                
                <span style={{color: "gray"}}>
                <strike>&#8377;{this.props.productFeature.compareSummary.productPricingSummary[this.props.selectedOption.value].price}</strike>
                </span>
                {'\u00A0'}
                <span style={{color: "green"}}>
                {this.props.productFeature.compareSummary.productPricingSummary[this.props.selectedOption.value].totalDiscount}
                % OFF</span>
                </p>
            </th>
            :
            ""
        )
    }
}