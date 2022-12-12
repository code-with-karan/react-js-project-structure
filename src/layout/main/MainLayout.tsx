import MainHeader from "../common/header";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./style.scss";
const { Content } = Layout;

function MainLayout() {
  return (
    <Layout className="site-layout">
      <MainHeader></MainHeader>
      <Content className="site-layout-background">
          <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;