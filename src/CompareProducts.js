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
      options:[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ],
      selectedOption: null

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
            {value: value.title, label: value.title})
          console.log(`${key} ${value.title}`); // "a 5", "b 7", "c 9"
        });
        console.log("======", optionsProduct)
        this.setState({productFeature: productsObject.products,
        options: [...optionsProduct]})
      });
    
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    console.log("products_array",this.state.productFeature)
    return (
      <div className="table-news">
        <Table striped bordered hover>
          <thead>
                  
                    {
                      this.state.productFeature 
                      ? 
                      <tr>
                        <th>Compare</th>
                        <th>
                          <img 
                            src={this.state.productFeature.compareSummary.images["TVSF2WYXTKAR7RAF"]}
                            alt="W3Schools.com"
                            style={{width:"200px", height:"200px"}}></img>
                            <p>{this.state.productFeature.compareSummary.titles["TVSF2WYXTKAR7RAF"].title}</p>
                            <p>
                            &#8377;
                            {this.state.productFeature.compareSummary.productPricingSummary["TVSF2WYXTKAR7RAF"].finalPrice}
                            {'\u00A0'}
                            <span style={{color: "gray"}}>
                              <strike>&#8377;{this.state.productFeature.compareSummary.productPricingSummary["TVSF2WYXTKAR7RAF"].price}</strike>
                            </span>
                            {'\u00A0'}
                            <span style={{color: "green"}}>
                            {this.state.productFeature.compareSummary.productPricingSummary["TVSF2WYXTKAR7RAF"].totalDiscount}
                            % OFF</span>
                            </p>
                          </th>
                        <th>
                        <img 
                            src={this.state.productFeature.compareSummary.images["TVSF2WYUE4PWNJKM"]}
                            alt="W3Schools.com"
                            style={{width:"200px", height:"200px"}}></img>
                            <p>{this.state.productFeature.compareSummary.titles["TVSF2WYUE4PWNJKM"].title}</p>
                            <p>
                            &#8377;
                            {this.state.productFeature.compareSummary.productPricingSummary["TVSF2WYUE4PWNJKM"].finalPrice}
                            {'\u00A0'}
                            
                            <span style={{color: "gray"}}>
                            <strike>&#8377;{this.state.productFeature.compareSummary.productPricingSummary["TVSF2WYUE4PWNJKM"].price}</strike>
                            </span>
                            {'\u00A0'}
                            <span style={{color: "green"}}>
                            {this.state.productFeature.compareSummary.productPricingSummary["TVSF2WYUE4PWNJKM"].totalDiscount}
                            % OFF</span>
                            </p>
                        </th>
                        <th>
                        <img 
                            src={this.state.productFeature.compareSummary.images["TVSE8FMZ9AQMEGC6"]}
                            alt="W3Schools.com"
                            style={{width:"300px", height:"300px"}}></img>
                            <p>{this.state.productFeature.compareSummary.titles["TVSE8FMZ9AQMEGC6"].title}</p>
                            <p>

                            &#8377;
                            {this.state.productFeature.compareSummary.productPricingSummary["TVSE8FMZ9AQMEGC6"].finalPrice}
                            {'\u00A0'}
                            
                            <span style={{color: "gray"}}>
                            <strike>&#8377;{this.state.productFeature.compareSummary.productPricingSummary["TVSE8FMZ9AQMEGC6"].price}</strike>
                            </span>
                            {'\u00A0'}
                            <span style={{color: "green"}}>
                            {this.state.productFeature.compareSummary.productPricingSummary["TVSE8FMZ9AQMEGC6"].totalDiscount}
                            % OFF</span>
                            </p>
                        </th>
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
                        {this.state.selectedOption ?
                        <SelectedProductImage/>
                        :
                        ""
                        }
                        
                        <th>
                                <Select
                                  value={this.state.selectedOption}
                                  onChange={this.handleChange}
                                  options={this.state.options}
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
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  {
                    feature.features.map(subFeature => {
                      return (
                        <tr className="table table-striped">
                          <td>{subFeature.featureName}</td>
                          <td>{subFeature.values["TVSF2WYXTKAR7RAF"]}</td>
                          <td>{subFeature.values["TVSF2WYUE4PWNJKM"]}</td>
                          <td>{subFeature.values["TVSE8FMZ9AQMEGC6"]}</td>
                          <td>{subFeature.values["TVSF3J7HUJF5XUBT"]}</td>
                          {
                            this.state.selectedOption ?
                            <InfoSelectedProduct subFeature={subFeature}/>
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
