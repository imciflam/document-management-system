import React, { Component } from "react";

export class Searcher extends Component {
  // state = {
  //   term: "",
  //   data: this.props.leadsFromParent
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     term: "",
  //     data: this.props.leadsFromParent
  //   };
  // }
  // onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     data: this.props.leadsFromParent
  //   });
  //   const value = e.target.value.toLowerCase();
  //   console.log(this.state);
  //   const filter = this.state.data.filter(user => {
  //     return user.name.toLowerCase().includes(value);
  //   });
  //   console.log(filter);
  //   this.props.rerenderParentCallback();
  // };

  render() {
    return (
      <div>
        <div className="searchbar form-group">
          <input
            value={this.props.text}
            onChange={this.props.search}
            type="text"
            className="form-control"
            placeholder="Поиск по предмету записки..."
          />
        </div>
      </div>
    );
  }
}

export default Searcher;
