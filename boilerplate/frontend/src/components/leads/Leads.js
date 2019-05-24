import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";
import Searcher from "./Searcher";
import { Pagination } from "antd";
import LeadItem from "./LeadItem";
export class Leads extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      active: 0,
      term: ""
    };
  }
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getLeads();
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    const leads = this.props.leads.map(lead => {
      return (
        <LeadItem
          id={lead.id}
          documentCode={lead.documentCode}
          documentStageCode={lead.documentStageCode}
          name={lead.name}
          email={lead.email}
          message={lead.message}
          fileDocument={lead.fileDocument}
          created_at={lead.created_at.slice(0, -17)}
        />
      );
    });
    return (
      <Fragment>
        <h2>Мои записки</h2>
        <Searcher leadsFromParent={this.props.leads} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Тип документа</th>
              <th>Этап</th>
              <th>Предмет</th>
              <th>Получатель</th>
              <th>Источник</th>
              <th>Файл</th>
              <th>Дата</th>
              <th />
            </tr>
          </thead>
          <tbody>{leads}</tbody>
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
  { getLeads }
)(Leads);
