import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";

var FileSaver = require("file-saver");

import { Pagination } from "antd";
export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getLeads();
  }

  onClick(j) {
    var blob = new Blob(["1"], {
      type: "text/plain;charset=utf-8"
    });
    console.log(j);
    FileSaver.saveAs(blob, j);
  }

  render() {
    console.log(this.props.leads);
    return (
      <Fragment>
        <h2>Мои записки</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Тип документа</th>
              <th>Этап</th>
              <th>Предмет</th>
              <th>Получатель</th>
              <th>Источник</th>
              <th>Дата</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
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
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          showSizeChanger
          pageSizeOptions={["15", "30", "40", "50", "100"]}
        />
      </Fragment>
    );
  }
}
//map that state to props of component
//state.leads - we want leads reducer
//.leads - part, which we need (from another file - insides)
const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads);
