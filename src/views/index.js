import {Loading} from "../components";
import Loadable from 'react-loadable'
const Login  =Loadable({loader:()=>import('./Login'), loading:Loading});
const Empty  =Loadable({loader:()=>import('./Empty'), loading:Loading});
const User  =Loadable({loader:()=>import('./User'), loading:Loading});
const Role  =Loadable({loader:()=>import('./Role'), loading:Loading});
const Order  =Loadable({loader:()=>import('./Order'), loading:Loading});
const OrderEdit  =Loadable({loader:()=>import('./Order/order_edit'), loading:Loading});
const Product  =Loadable({loader:()=>import('./Product'), loading:Loading});
const ProductEdit  =Loadable({loader:()=>import('./Product/product_edit'), loading:Loading});
export {
  Login,
  Empty,
  User,
  Order,
  OrderEdit,
  Product,
  ProductEdit,
  Role
}
