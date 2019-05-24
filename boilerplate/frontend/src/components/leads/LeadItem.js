import React, { Component } from "react";

import { deleteLead } from "../../actions/leads";
var FileSaver = require("file-saver");
import { connect } from "react-redux";

export class LeadItem extends Component {
  onClick(j) {
    var blob = new Blob(["1"], {
      type: "text/plain;charset=utf-8"
    });
    console.log(j);
    FileSaver.saveAs(blob, j);
  }

  render() {
    console.log(this.props);
    return (
      <tr key={this.props.id}>
        <td>{this.props.id}</td>
        <td>{this.props.documentCode}</td>
        <td>{this.props.documentStageCode}</td>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.message}</td>
        <td>
          <a>
            <u onClick={() => this.onClick(this.props.fileDocument)}>
              {this.props.fileDocument}
            </u>
          </a>
        </td>
        <td>{this.props.created_at}</td>
        <td>
          <button
            onClick={this.props.deleteLead.bind(this, this.props.id)}
            className="btn btn-danger btn-sm"
          >
            {" "}
            В архив
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});
export default connect(
  mapStateToProps,
  { deleteLead }
)(LeadItem);
