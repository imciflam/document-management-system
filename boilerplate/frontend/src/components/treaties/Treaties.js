import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTreaties, deleteTreaty } from "../../actions/treaties";
import TreatyChild from "./TreatyChild";

var FileSaver = require("file-saver");

import { Pagination } from "antd";
export class Treaties extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      treatiesData: ""
    };
  }

  static propTypes = {
    treaties: PropTypes.array.isRequired,
    getTreaties: PropTypes.func.isRequired,
    deleteTreaty: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getTreaties();
  }

  onClick(treaty) {
    console.log(treaty);
    this.setState({
      showPopup: true,
      treatiesData: treaty
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Мои договоры</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Тип документа</th>
              <th>Этап</th>
              <th>Код контрагента</th>
              <th>Сумма</th>
              <th>Дата подписания</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.treaties.map(treaty => (
              <tr key={treaty.id}>
                <td onClick={this.onClick.bind(this, treaty)}>
                  <u>{treaty.id}</u>
                </td>
                <td>{treaty.contractCode}</td>
                <td>{treaty.contractStageCode}</td>
                <td>{treaty.counteragentCode}</td>
                <td>{treaty.sumMoney}</td>
                <td>{treaty.dateOfSigning}</td>
                <td>
                  <button
                    onClick={this.props.deleteTreaty.bind(this, treaty.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    В архив
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
        {this.state.showPopup ? (
          <TreatyChild treatyFromParent={this.state.treatiesData} />
        ) : null}
      </Fragment>
    );
  }
}
//map that state to props of component
//state.treaties - we want treaties reducer
//.treaties - part, which we need (from another file - insides)
const mapStateToProps = state => ({
  treaties: state.treaties.treaties
});

export default connect(
  mapStateToProps,
  { getTreaties, deleteTreaty }
)(Treaties);
