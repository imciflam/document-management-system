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
      <div className="card card-body mt-4 mb-4 mx-auto">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Тип документа
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.treatyFromParent.contractCode}
              />
            </div>
            <label class="col-sm-2 col-form-label">Тип документа</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.treatyFromParent.contractStageCode}
              />
            </div>

            <label class="col-sm-2 col-form-label">Этап</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.treatyFromParent.contractType}
              />
            </div>

            <label class="col-sm-2 col-form-label">Код контрагента</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value={this.props.treatyFromParent.counteragentCode}
              />
            </div>

            <label class="col-sm-2 col-form-label">Вид контрагента</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="Комитент"
              />
            </div>

            <label class="col-sm-2 col-form-label">Наименование</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="ООО Витакор"
              />
            </div>

            <label class="col-sm-2 col-form-label">Страна регистрации</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="Российская Федерация"
              />
            </div>
            <label class="col-sm-2 col-form-label">Сумма</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value={this.props.treatyFromParent.sumMoney}
              />
            </div>

            <label class="col-sm-2 col-form-label">Сумма НДС</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value={this.props.treatyFromParent.sumNDS}
              />
            </div>
            <label class="col-sm-2 col-form-label">ИНН</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="010101010"
              />
            </div>

            <label class="col-sm-2 col-form-label">Адрес</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="Российская Федерация, республика Татарстан г. Казань, ул. Заслонова, 17, оф. 3"
              />
            </div>

            <label class="col-sm-2 col-form-label">КПП</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="010101010"
              />
            </div>

            <label class="col-sm-2 col-form-label">ОГРН</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="0375791010"
              />
            </div>

            <label class="col-sm-2 col-form-label">ОКВЕД</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="01036468001"
              />
            </div>

            <label class="col-sm-2 col-form-label">Юр/Физ лицо</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value="Юр. лицо"
              />
            </div>

            <label class="col-sm-2 col-form-label">Дата подписания</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value={this.props.treatyFromParent.dateOfSigning}
              />
            </div>

            <label class="col-sm-2 col-form-label">Срок действия</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value={this.props.treatyFromParent.periodOfValidity}
              />
            </div>

            <label class="col-sm-2 col-form-label">Реквизиты</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                value={this.props.treatyFromParent.requisite}
              />
            </div>

            <label class="col-sm-2 col-form-label">Документ</label>
            <div class="col-sm-10">
              <u>
                {" "}
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
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
