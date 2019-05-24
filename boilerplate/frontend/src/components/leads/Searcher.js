import React, { Component } from "react";

export class Searcher extends Component {
  state = {
    term: "",
    data: this.props.leadsFromParent
  };
  dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = this.props.leadsFromParent.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    console.log(filter);
    // update({
    //   data: filter,
    //   active: 0,
    //   term: value
    // });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props.leadsFromParent);
    const { term } = this.state;
    return (
      <div>
        <div className="searchbar form-group">
          <input
            value={term}
            type="text"
            className="form-control"
            placeholder="Поиск по предмету записки..."
            onChange={this.dataSearch}
          />
        </div>
      </div>
    );
  }
}

export default Searcher;
