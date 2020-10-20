import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import empty from '@/assets/images/404.jpg'
import './index.less'

class Empty extends Component {
  goIndex =()=> {
    this.props.history.push('/admin/user')
  }
  render() {
    return (
      <Link to='/admin/user' className='empty_wrapper'  />
    );
  }
}

export default Empty;
