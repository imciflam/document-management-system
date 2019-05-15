import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";
import { Upload, Icon, message } from "antd";

const Dragger = Upload.Dragger;
var fileDocument;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      //console.log(info.file, info.fileList);
      console.log(info.fileList[0].name);
      fileDocument = info.fileList[0].name;
    }
    if (status === "done") {
      message.success(`${info.file.name} успешно загружен.`);
    } else if (status === "error") {
      message.error(`${info.file.name} не был загружен.`);
    }
  }
};

export class Form extends Component {
  state = {
    documentCode: "",
    documentStageCode: "",
    name: "",
    email: "",
    message: "",
    noteText: "",
    fileDocument: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      documentCode: "служебная записка",
      documentStageCode: "черновик"
    };
    this.fileInput = React.createRef();
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
      message,
      noteText
    } = this.state;
    const lead = {
      documentCode,
      documentStageCode,
      name,
      email,
      message,
      fileDocument,
      noteText
    };
    this.props.addLead(lead);
    console.log(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
      noteText: ""
    });
    // console.log(this.fileInput.current.files[0]);
    // alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  };

  render() {
    const {
      documentCode,
      documentStageCode,
      name,
      email,
      message,
      noteText
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4 w-75 mx-auto">
        <h2>Добавить записку</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="documentCode">Тип документа</label>
            <select
              className="form-control"
              id="documentCode"
              name="documentCode"
              value={documentCode}
              onChange={this.onChange}
            >
              <option value="служебная записка">служебная записка</option>
              {/* { <option value="договор">договор</option>
              <option value="контракт">контракт</option>
              <option value="распоряжение">распоряжение</option>
              <option value="счет">счет</option>
              <option value="счет-фактура">счет-фактура</option>
              <option value="платежные поручения">платежные поручения</option>
              <option value="протокол">протокол</option>
              <option value="приказ">приказ</option>
              <option value="докладная">докладная</option>} */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="documentStageCode">Этап</label>
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
            <input
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>

          <div className="form-group">
            <label>Текст записки</label>
            <textarea
              className="form-control"
              type="text"
              name="noteText"
              onChange={this.onChange}
              value={noteText}
            />
          </div>
          {/*<div className="form-group">
            <input
              type="file"
              className="fileDocument"
              id="fileDocument"
              ref={this.fileInput}
              onChange={this.onFileChange}
            />
    </div>*/}
          <label>Приложение</label>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Кликните или перетащите файлы сюда.
            </p>
            <p className="ant-upload-hint">
              Возможно приложить несколько файлов.
            </p>
          </Dragger>
          <br />
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
