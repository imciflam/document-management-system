import React, { Component } from "react";

export class DisciplineChild extends Component {
  render() {
    return (
      <div className="card card-body mt-4 mb-4 mx-auto">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Испольнитель
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.Performer}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Название
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.NameTask}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Автор
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.Author}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Дата начала
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.DateOfSigning}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Дата конца
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.DataOfEnd}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Контролер
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.Contorl}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Комментарии
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readOnly
                class="form-control-plaintext"
                id="staticEmail"
                value={this.props.dataFromParent.Comments}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DisciplineChild;
