import React, {Component} from 'react';
import logo from '@/assets/images/logo.png';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";
import {adminRoutes} from 'routes'
import { createFromIconfontCN } from '@ant-design/icons';
import './index.less'
const {  Sider } = Layout;
const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2107605_20miz8gqv43.js',
});
class SiderLayout extends Component {
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              {
                item.icon ?  <IconFont type={item.icon} /> :''
              }

              <span style={{fontSize:'12px'}}>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      } else {
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0);
        if (cItem) {
          this.openKey = item.key;
        }
        pre.push((
          <SubMenu key={item.key} title={
            <span>
				<IconFont type={item.icon} />
				<span style={{fontSize:'12px'}}>{item.title}</span>
			</span>
          }>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        ))
      }
      return pre;
    },[])
  }
  /**
   * 在第一次render()之前执行
   */
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(adminRoutes)
  }
  render() {
    const openKey= this.openKey
    const path = this.props.location.pathname;
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{background:'#fff'}}>
        <div className="logo_area">
          <img src={logo} alt="头像" className='logo_avatar'/>
          <span className="author white">OAKS后台管理系统</span>
        </div>
        <Menu

          theme='light'
          defaultOpenKeys={[openKey]}
          selectedKeys={[path]}
          className="menu"
          mode='inline'
        >
          {this.menuNodes}
        </Menu>
      </Sider>
    );
  }
}

export default SiderLayout;
