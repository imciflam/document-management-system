import React, { Component } from "react";
import ReactDOM from "react-dom";
export class TreatyChild extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props.treatyFromParent);
    return (
      <div>
        <h1>kek</h1>
      </div>
    );
  }
}

ReactDOM.render(<TreatyChild />, document.getElementById("app"));
export default TreatyChild;
