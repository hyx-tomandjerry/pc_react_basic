import React, {Component} from 'react';
import { Layout } from 'antd';
import './index.less'
import SiderLayout from '../SiderLayout'
import ContentLayout from '../ContentLayout'

import {withRouter} from "react-router-dom";


const { Header , Content } = Layout;
@withRouter
class FrameLayout extends Component {
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  state = {
    collapsed: false
  }
  render() {
    return (
      <Layout>
        <SiderLayout {...this.props}/>
        <Layout>
          <Header className="site-layout-background" style={{ padding: '0 15px',height:'45px' }}>

          </Header>
          <Content className="site-layout-background"
                   style={{
                     margin: '24px 16px',
                     padding: 24,
                     minHeight: 620,
                   }}>
            <ContentLayout />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default FrameLayout;
