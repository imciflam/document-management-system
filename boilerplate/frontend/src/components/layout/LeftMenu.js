import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import Form from "../leads/Form";
import Leads from "../leads/Leads";

import FormForTreaties from "../treaties/Form";
import Treaties from "../treaties/Treaties";

import FormForDiscipline from "../discipline/Form";

const MyComponent = ({ leadsCalled }) => {
  console.log(leadsCalled);
  switch (leadsCalled) {
    case "mountNewNoteForm":
      return <Form />;
    case "mountLeadsForm":
      return <Leads />;
    case "mountNewTreatyForm":
      return <FormForTreaties />;
    case "mountTreatiesForm":
      return <Treaties />;
    case "mountTasksForm":
      return <FormForDiscipline />;
    default:
      return <Leads />;
  }
};

class LeftMenu extends React.Component {
  state = {
    collapsed: false,
    leadsCalled: "mountNewNoteForm"
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  mountNewTreatyForm() {
    this.setState({ leadsCalled: "mountNewTreatyForm" });
  }

  mountNewNote() {
    this.setState({ leadsCalled: "mountNewNoteForm" });
  }
  mountLeadsForm() {
    this.setState({ leadsCalled: "mountLeadsForm" });
  }

  mountTreatiesForm() {
    this.setState({ leadsCalled: "mountTreatiesForm" });
  }

  mountTasksForm() {
    this.setState({ leadsCalled: "mountTasksForm" });
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" onClick={this.mountNewNote.bind(this)}>
              Новая записка
            </Menu.Item>
            <Menu.Item key="2" onClick={this.mountNewTreatyForm.bind(this)}>
              Новый договор
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                alert("в разработке");
              }}
            >
              Сформировать отчет
            </Menu.Item>
            <Menu.Item key="4" onClick={this.mountTasksForm.bind(this)}>
              Задачи
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[""]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon
                        style={{ verticalAlign: "0.125em" }}
                        type="folder"
                      />
                      Общие папки
                    </span>
                  }
                >
                  <Menu.Item key="1" onClick={this.mountLeadsForm.bind(this)}>
                    Служебные записки
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    onClick={this.mountTreatiesForm.bind(this)}
                  >
                    Договоры
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Задачи секретариата
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Запуск проектов
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Заявления на отпуск
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Клиенты
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Мои договоры
                  </Menu.Item>
                  <Menu.Item
                    key="8"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Мои клиенты
                  </Menu.Item>
                  <Menu.Item
                    key="9"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Мои служебные записки
                  </Menu.Item>
                  <Menu.Item
                    key="10"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    Общие документы
                  </Menu.Item>
                  <Menu.Item
                    key="11"
                    onClick={() => {
                      alert("в разработке");
                    }}
                  >
                    СЗ в ПрОФ
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="star" style={{ verticalAlign: "0.125em" }} />
                      Избранное
                    </span>
                  }
                />
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="user" style={{ verticalAlign: "0.125em" }} />
                      Мои документы
                    </span>
                  }
                />
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon
                        type="laptop"
                        style={{ verticalAlign: "0.125em" }}
                      />
                      Договоры
                    </span>
                  }
                />

                <Menu.Item
                  onClick={() => {
                    alert("в разработке");
                  }}
                >
                  <Icon
                    type="file-search"
                    style={{ verticalAlign: "0.125em" }}
                  />
                  <span>Результаты поиска</span>
                </Menu.Item>
                <Menu.Item>
                  <Icon type="delete" style={{ verticalAlign: "0.125em" }} />
                  <span>Архив</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <MyComponent leadsCalled={this.state.leadsCalled} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    );
  }
}
export default LeftMenu;
