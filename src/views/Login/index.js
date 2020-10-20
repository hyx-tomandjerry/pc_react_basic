import React, {Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import homeBanner from '@/assets/images/home_banner.png'
import './index.less'

class Login extends Component {
  onFinishHandle =(value)=>{
    console.log('10',value)

  }
  render() {
    return (
      <div className='login_wrapper'>
        <div className="login_form">
          <div className="login_form_left">
            <img src={homeBanner} alt="" style={{width:'350px'}}/>
          </div>
          <div className="login_form_right">
            <div className="login_form_right_title">OAKS后台管理平台</div>
            <Form initialValues={{remember:true}} style={{margin:'30px'}} onFinish={this.onFinishHandle}>
              <Form.Item name='mobile' rules={[
                {required:true,message:'请输入用户名'},
                {pattern:/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/,message:'电话号码格式不正确'}
              ]}>
                <Input placeholder='用户名'
                       prefix={<UserOutlined  style={{fontSize:'18px',color:'#1890ff',marginRight:'6px'}}/>}/>
              </Form.Item>
              <Form.Item name='token' rules={[
                {required:true,message:'请输入密码'},
                {max:12,message:'请输入6-12位'},
                {min:6,message:'请输入6-12位'}
              ]}>
                <Input placeholder='密码'

                       prefix={<LockOutlined style={{fontSize:'18px',color:'#1890ff',marginRight:'6px'}} />}
                       type="password"/>
              </Form.Item>
              <Form.Item >
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox><span className="login-form-reme">记住密码</span></Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">忘记密码</a>
              </Form.Item>
              <Form.Item style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit"  shape="round" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
