import React from "react";
import ReactDOM from "react-dom";
import CompareProducts from "./CompareProducts";
import "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="App">
          <CompareProducts/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
