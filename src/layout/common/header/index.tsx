import { Layout } from 'antd';
const { Header } = Layout;

function MainHeader() {
  return (
    <Header className="layout__header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="header-container"></div>
    </Header>
  );
}

export default MainHeader;