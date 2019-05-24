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
    this.setState({ [e.target.name]: e.target.value });
    const value = e.target.value.toLowerCase();
    console.log(value);
    const filter = this.props.leadsFromParent.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    console.log(filter);
  };

  render() {
    const { term, data } = this.state;
    console.log(this.props.leadsFromParent);
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
