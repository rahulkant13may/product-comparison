import React from "react";
import "./styles.css";
import Table from 'react-bootstrap/Table';
import Select from 'react-select';
import SelectedProductImage from "./SelectedProductImage";
import InfoSelectedProduct from "./InfoSelectedProduct";


export default class CompareProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productFeature: null,
      options:[],
      selectedOption: null,
      multipleOptionArray:[]

    };
  }
   usersArray = ["abc"];

  componentDidMount(){
    fetch('http://www.mocky.io/v2/5e86ec5531000011d8814754')
      .then(response => response.json())
      .then(productsObject => {
        var optionsProduct = []
        Object.entries(productsObject.products.compareSummary.titles).forEach(([key, value]) => {
          optionsProduct.push(
            {value: key, label: value.title})
          // console.log(`${key} ${value.title}`); // "a 5", "b 7", "c 9"
        });
        // console.log("======", optionsProduct)
        this.setState({productFeature: productsObject.products,
        options: [...optionsProduct]})
      });
    
  }

  handleChange = selectedOption => {
    if(!this.state.multipleOptionArray.includes(selectedOption)){
      this.setState({ selectedOption, multipleOptionArray: [...this.state.multipleOptionArray, selectedOption]});
    }
    

    console.log(`Option selected:`, selectedOption);
  };

  closeIconClicked = (optionClosed) => {
    console.log("clicked close", optionClosed)
    var newProductCompare = this.state.multipleOptionArray.filter(option => option != optionClosed)
    this.setState({multipleOptionArray: newProductCompare})

  }

  render() {
    console.log("products_array",this.state.productFeature, this.state.multipleOptionArray)
    return (
      <div className="table-news">
        <Table striped bordered hover>
          <thead>
                  
                    {
                      this.state.productFeature 
                      ? 
                      <tr >
                        <th className="compare-th"> Compare <br/>
                        {this.state.multipleOptionArray.length} Item Selected
                       </th>
                        
                        {
                          this.state.selectedOption ?
                        this.state.multipleOptionArray.map(option => 
                              <SelectedProductImage 
                                  productFeature={this.state.productFeature} 
                                  selectedOption={option}
                                  closeIconClicked={this.closeIconClicked}/>)
                        
                        :
                        ""
                        }
                        
                        <th>
                          <p>Add a product</p>
                                <Select
                                  value={this.state.selectedOption}
                                  onChange={this.handleChange}
                                  options={this.state.options}
                                  placeholder="Choose a Product"
                                />
                        </th>
                      </tr>
                      :
                      ""
                      
                    }

                  
            {
              this.state.productFeature 
              ?
              this.state.productFeature.featuresList.map(feature =>  {
                return (
                <>

                  <tr>
                    <th>{feature.title}</th>
                    <th></th>
                    {

                      this.state.multipleOptionArray.map(option => {return <th></th>})
                 
                    }
                  </tr>
                  {
                    feature.features.map(subFeature => {
                      return (
                        <tr className="table table-striped">
                          <td>{subFeature.featureName}</td>
                          {
                            this.state.selectedOption ?
                            this.state.multipleOptionArray.map(option => <InfoSelectedProduct subFeature={subFeature} selectedOption={option}/>)
                            
                            :
                            ""
                          }
                          <td></td>
                        </tr>
                      )
                    })
                  }

                </>
                  )
              } )
              :
              ""
  
          
            } 

          </thead>
          <tbody>

          </tbody>
        </Table>
      </div>
    );
  }
}
