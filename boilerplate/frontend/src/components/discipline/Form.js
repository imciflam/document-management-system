import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Upload, Icon, message, DatePicker } from "antd";
import DisciplineChild from "../discipline/DisciplineChild";

const Dragger = Upload.Dragger;
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

export class FormForDiscipline extends Component {
  state = {
    NameTask: "",
    Author: "",
    Performer: "",
    DateOfSigning: "",
    DataOfEnd: "",
    Comments: "",
    Control: "",
    Controller: ""
  };
  constructor() {
    super();
    this.state = {
      showPopup: false,
      data: ""
    };
  }
  onClick(disdata) {
    this.setState({
      showPopup: true,
      data: disdata
    });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const {
      NameTask,
      Author,
      Performer,
      Control,
      DateOfSigning,
      DataOfEnd
    } = this.state;
  };
  onDatepickerChangeS(date, dateString) {
    this.setState({ DateOfSigning: dateString });
  }
  onDatepickerChangeE(date, dateString) {
    this.setState({ DataOfEnd: dateString });
  }
  radioChange(e) {
    this.setState({
      Control: e.currentTarget.value
    });
  }
  render() {
    const {
      NameTask,
      Author,
      Performer,
      DateOfSigning,
      DataOfEnd,
      Contorl,
      Comments
    } = this.state;

    const disdata = {
      NameTask,
      Author,
      Performer,
      DateOfSigning,
      DataOfEnd,
      Contorl,
      Comments
    };
    return (
      <div>
        <div className="card card-body mt-4 mb-4 w-75 mx-auto">
          <h2>Добавить задачу</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Название</label>
              <input
                className="form-control"
                type="text"
                name="NameTask"
                value={NameTask}
                onChange={this.onChange}
              />

              <div className="form-group">
                <label>Описание</label>
                <input
                  className="form-control"
                  type="text"
                  name="Comments"
                  onChange={this.onChange}
                  value={Comments}
                />
              </div>

              <div className="form-group">
                <label>Начать</label>
                <DatePicker onChange={this.onDatepickerChangeS.bind(this)} />
              </div>

              <div className="form-group">
                <label>Завершить</label>
                <DatePicker onChange={this.onDatepickerChangeE.bind(this)} />
              </div>

              <div className="form-group">
                <label>Испольнитель</label>
                <input
                  className="form-control"
                  type="text"
                  name="Performer"
                  onChange={this.onChange}
                  value={Performer}
                />
              </div>

              <div className="form-group">
                <label>Контроллер</label>
                <input
                  className="form-control"
                  type="text"
                  name="Contorl"
                  onChange={this.onChange}
                  value={Contorl}
                />
              </div>

              {/*<div className="form-group>
                type = "file"
                className="fileDocument"
                id ="fileDocument"
                ref = {this.fileInput}
                onChange = {this.onFileChange}
                />
              </div>*/}

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

              <div className="form-group">
                <label>Автор</label>
                <input
                  className="form-control"
                  type="text"
                  name="Author"
                  onChange={this.onChange}
                  value={Author}
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onClick.bind(this, disdata)}
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
        {this.state.showPopup ? (
          <DisciplineChild dataFromParent={this.state.data} />
        ) : null}
      </div>
    );
  }
}
export default connect(null)(FormForDiscipline);
