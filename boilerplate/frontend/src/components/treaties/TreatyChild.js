import React, { Component } from "react";

var FileSaver = require("file-saver");

export class TreatyChild extends Component {
  onClick(j) {
    var blob = new Blob(["1"], {
      type: "text/plain;charset=utf-8"
    });
    console.log(j);
    FileSaver.saveAs(blob, j);
  }
  componentDidMount() {}

  render() {
    console.log(this.props.treatyFromParent);
    return (
      <div classNameName="card card-body mt-4 mb-4 mx-auto">
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Тип</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                value={this.props.treatyFromParent.contractCode}
              />
            </div>

            <label className="col-sm-2 col-form-label">Этап</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.contractStageCode}
              />
            </div>

            <label className="col-sm-2 col-form-label">Вид договора</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.contractType}
              />
            </div>

            <label className="col-sm-2 col-form-label">Код контрагента</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.counteragentCode}
              />
            </div>

            <label className="col-sm-2 col-form-label">Вид контрагента</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="Комитент"
              />
            </div>

            <label className="col-sm-2 col-form-label">Наименование</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="ООО Витакор"
              />
            </div>

            <label className="col-sm-2 col-form-label">
              Страна регистрации
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="Российская Федерация"
              />
            </div>
            <label className="col-sm-2 col-form-label">Сумма</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.sumMoney}
              />
            </div>

            <label className="col-sm-2 col-form-label">Сумма НДС</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.sumNDS}
              />
            </div>
            <label className="col-sm-2 col-form-label">ИНН</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="010101010"
              />
            </div>

            <label className="col-sm-2 col-form-label">Адрес</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="Российская Федерация, республика Татарстан г. Казань, ул. Заслонова, 17, оф. 3"
              />
            </div>

            <label className="col-sm-2 col-form-label">КПП</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="010101010"
              />
            </div>

            <label className="col-sm-2 col-form-label">ОГРН</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="0375791010"
              />
            </div>

            <label className="col-sm-2 col-form-label">ОКВЕД</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="01036468001"
              />
            </div>

            <label className="col-sm-2 col-form-label">Юр/Физ лицо</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value="Юр. лицо"
              />
            </div>

            <label className="col-sm-2 col-form-label">Дата подписания</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.dateOfSigning}
              />
            </div>

            <label className="col-sm-2 col-form-label">Срок действия</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.periodOfValidity}
              />
            </div>

            <label className="col-sm-2 col-form-label">Реквизиты</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={this.props.treatyFromParent.requisite}
              />
            </div>

            <label className="col-sm-2 col-form-label">Документ</label>
            <div className="col-sm-10">
              <u>
                {" "}
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.props.treatyFromParent.fileDocument}
                  onClick={() =>
                    this.onClick(this.props.treatyFromParent.fileDocument)
                  }
                />
              </u>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TreatyChild;
