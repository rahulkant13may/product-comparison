import React from 'react';

export default class InfoSelectedProduct extends React.Component {
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
            <>
            <td>{this.props.subFeature.values["TVSF3J7HUJF5XUBT"]}</td>
            </>
        )
    }
}