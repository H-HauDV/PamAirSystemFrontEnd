import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import "../public/style/App.css";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  AntCloudOutlined,
} from "@ant-design/icons";

import Management from "./Management";
import TestAPI from "./TestAPI";
import type { MenuProps } from "antd";
import "./_app.scss";
type MenuItem = Required<MenuProps>["items"][number];
const { Header, Content, Footer, Sider } = Layout;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Management", "1", <PieChartOutlined />),
  getItem("TestAPI", "2", <DesktopOutlined />),
];
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [pageRoute, setPageRoute] = useState("Management");
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
      
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical">
          <div className="demo-logo-vertical-log">
            <AntCloudOutlined />
          </div>

          {collapsed ? (
            <></>
          ) : (
            <div className="demo-logo-vertical-text">PamAir system</div>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              label: (
                <div>
                  <DesktopOutlined
                    style={{
                      marginRight: "30px",
                    }}
                  />
                  TestAPI
                </div>
              ),
              onClick: () => {
                if (pageRoute === "TestAPI") {
                  setPageRoute("Management");
                }
              },
            },
            {
              key: "2",
              label: (
                <div>
                  <PieChartOutlined
                    style={{
                      marginRight: "30px",
                    }}
                  />
                  Management
                </div>
              ),
              onClick: () => {
                if (pageRoute === "Management") {
                  setPageRoute("TestAPI");
                }
              },
            },
          ]}
          defaultSelectedKeys={pageRoute === "Management" ? ["1"] : ["2"]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="page-name-high">
            {pageRoute === "Management" ? " TestAPI" : "Management"}
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <div style={{ height: "100%" }}>
              {pageRoute === "Management" ? <TestAPI /> : <Management />}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
