import React from 'react';

export default class SelectedProductImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productFeature: null,
            options:[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            selectedOption: null
      
          };
    }
    componentDidMount(){
        fetch('http://www.mocky.io/v2/5e86ec5531000011d8814754')
          .then(response => response.json())
          .then(productsObject => {
            var optionsProduct = []
            Object.entries(productsObject.products.compareSummary.titles).forEach(([key, value]) => {
              optionsProduct.push(
                {value: value.title, label: value.title})
              console.log(`${key} ${value.title}`); // "a 5", "b 7", "c 9"
            });
            console.log("======", optionsProduct)
            this.setState({productFeature: productsObject.products,
            options: [...optionsProduct]})
          });
        
      }

    render() {
        return (
            this.state.productFeature
            ?
            <th>
            <img 
                src={this.state.productFeature.compareSummary.images["TVSF3J7HUJF5XUBT"]}
                alt="W3Schools.com"
                style={{width:"200px", height:"200px"}}></img>
                <p>{this.state.productFeature.compareSummary.titles["TVSF3J7HUJF5XUBT"].title}</p>
                <p>
                &#8377;
                {this.state.productFeature.compareSummary.productPricingSummary["TVSF3J7HUJF5XUBT"].finalPrice}
                {'\u00A0'}
                
                <span style={{color: "gray"}}>
                <strike>&#8377;{this.state.productFeature.compareSummary.productPricingSummary["TVSF3J7HUJF5XUBT"].price}</strike>
                </span>
                {'\u00A0'}
                <span style={{color: "green"}}>
                {this.state.productFeature.compareSummary.productPricingSummary["TVSF3J7HUJF5XUBT"].totalDiscount}
                % OFF</span>
                </p>
            </th>
            :
            ""
        )
    }
}