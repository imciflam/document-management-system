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
    let lead = this.props.lead;

    return (
      <tr key={lead.id}>
        <td>{lead.id}</td>
        <td>{lead.documentCode}</td>
        <td>{lead.documentStageCode}</td>
        <td>{lead.name}</td>
        <td>{lead.email}</td>
        <td>{lead.message}</td>
        <td>
          <a>
            <u onClick={() => this.onClick(lead.fileDocument)}>
              {lead.fileDocument}
            </u>
          </a>
        </td>
        <td>{lead.created_at.slice(0, -17)}</td>
        <td>
          <button
            onClick={this.props.deleteLead.bind(this, lead.id)}
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
