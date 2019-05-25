import React, { Component } from "react";
import LeadItem from "./LeadItem";
import { Pagination } from "antd";

export class LeadList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.leads == undefined) {
      return <p>Ничего не найдено</p>;
    }

    return (
      <div>
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
          <tbody>
            {this.props.leads.map(lead => {
              if (lead.match == false) {
                return;
              }
              return (
                <LeadItem
                  key={lead.id}
                  lead={lead}
                />
              );
            })}
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
      </div>
    );
  }
}

export default LeadList;
