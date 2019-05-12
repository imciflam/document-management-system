import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    documentCode: "",
    documentStageCode: "",
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { documentCode: "акт" };
    this.state = { documentStageCode: "черновик" };
  }

  //any name will match, same with value
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      documentCode,
      documentStageCode,
      name,
      email,
      message
    } = this.state;
    const lead = { documentCode, documentStageCode, name, email, message };
    this.props.addLead(lead);
    console.log(lead);
    this.setState({
      documentCode: "акт",
      documentStageCode: "черновик",
      name: "",
      email: "",
      message: ""
    });
    console.log(documentStageCode);
  };

  render() {
    const {
      documentCode,
      documentStageCode,
      name,
      email,
      message
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Добавить записку</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="documentCode">Код документа</label>
            <select
              className="form-control"
              id="documentCode"
              name="documentCode"
              value={documentCode}
              onChange={this.onChange}
            >
              <option value="акт">акт</option>
              <option value="договор">договор</option>
              <option value="контракт">контракт</option>
              <option value="распоряжение">распоряжение</option>
              <option value="счет">счет</option>
              <option value="счет-фактура">счет-фактура</option>
              <option value="платежные поручения">платежные поручения</option>
              <option value="протокол">протокол</option>
              <option value="приказ">приказ</option>
              <option value="докладная">докладная</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="documentStageCode">Код этапа</label>
            <select
              className="form-control"
              id="documentStageCode"
              name="documentStageCode"
              value={documentStageCode}
              onChange={this.onChange}
            >
              <option value="черновик">черновик</option>
              <option value="на согласовании">на согласовании</option>
              <option value="на исполнении">на исполнении</option>
              <option value="на рассмотрении">на рассмотрении</option>
              <option value="исполнено">исполнено</option>
              <option value="согласовано">согласовано</option>
              <option value="завершено">завершено</option>
              <option value="отклонено">отклонено</option>
            </select>
          </div>
          <div className="form-group">
            <label>Предмет</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Получатель</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Источник</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
