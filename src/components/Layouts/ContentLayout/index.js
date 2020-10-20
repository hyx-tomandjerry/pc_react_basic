import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import {
  Empty,
  User,
  Order,
  OrderEdit,
  Role,
  Product,
  ProductEdit
} from 'views'
class ContentLayout extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/user' component={User}/>
        <Route path='/admin/order/list' component={Order}/>
        <Route path='/admin/role' component={Role}/>
        <Route path='/admin/order/edit' component={OrderEdit}/>
        <Route path='/admin/product/list' component={Product}/>
        <Route path='/admin/product/edit' component={ProductEdit}/>
        <Redirect to='/404' component={Empty}/>
      </Switch>
    );
  }
}

export default ContentLayout;
