import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import Form from "../leads/Form";
import Leads from "../leads/Leads";

const MyComponent = ({ name }) => {
  if (name) {
    return <div className="hello">Привет, {name}</div>;
  }
  return <div className="hello">Пожалуйста, войдите в ваш аккаунт</div>;
};

class LeftMenu extends React.Component {
  state = {
    collapsed: false,
    leadsCalled: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  mountDocumentForm() {
    alert("document");
  }

  mountLeadsForm() {
    alert("leads");
    this.setState({ leadsCalled: true });
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
            <Menu.Item key="1">Новое сообщение</Menu.Item>
            <Menu.Item key="2" onClick={this.mountDocumentForm}>
              Новый документ
            </Menu.Item>
            <Menu.Item key="3">Сформировать отчет</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {/*<Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>*/}
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
                      <Icon type="user" />
                      Общие папки
                    </span>
                  }
                >
                  <Menu.Item key="1" onClick={this.mountLeadsForm.bind(this)}>
                    Служебные записки
                  </Menu.Item>
                  <Menu.Item key="2">Договоры</Menu.Item>
                  <Menu.Item key="3">Задачи секретариата</Menu.Item>
                  <Menu.Item key="4">Запуск проектов</Menu.Item>
                  <Menu.Item key="5">Заявления на отпуск</Menu.Item>
                  <Menu.Item key="6">Клиенты</Menu.Item>
                  <Menu.Item key="7">Мои договоры</Menu.Item>
                  <Menu.Item key="8">Мои клиенты</Menu.Item>
                  <Menu.Item key="9">Мои служебные записки</Menu.Item>
                  <Menu.Item key="10">Общие документы</Menu.Item>
                  <Menu.Item key="11">СЗ в ПрОФ</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="notification" />
                      Избранное
                    </span>
                  }
                >
                  {/*<Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>*/}
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Мои документы
                    </span>
                  }
                >
                  {/*<Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>*/}
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Договоры
                    </span>
                  }
                >
                  {/*<Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>*/}
                </SubMenu>
                <SubMenu
                  key="sub6"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Результаты поиска
                    </span>
                  }
                >
                  {/*<Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>*/}
                </SubMenu>
                <SubMenu
                  key="sub7"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Корзина
                    </span>
                  }
                >
                  {/*<Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>*/}
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {!this.state.leadsCalled ? <Form /> : <Leads />}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    );
  }
}
export default LeftMenu;
