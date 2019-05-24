import React, { Component } from "react";

export class Searcher extends Component {
  state = {
    term: "",
    data: this.props.leadsFromParent
  };

  constructor(props) {
    super(props);
    this.state = {
      term: "",
      data: this.props.leadsFromParent
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      data: this.props.leadsFromParent
    });
    const value = e.target.value.toLowerCase();
    console.log(this.state);
    const filter = this.state.data.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    console.log(filter);
    this.setState({
      data: filter
    });
    this.props.rerenderParentCallback();
  };

  render() {
    const { term } = this.state;
    return (
      <div>
        <div className="searchbar form-group">
          <input
            value={term}
            type="text"
            name="term"
            className="form-control"
            placeholder="Поиск по предмету записки..."
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Searcher;
