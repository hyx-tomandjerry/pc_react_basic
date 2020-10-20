import {
  Login,
  Empty
} from '../views'
export const baseRoutes =[
  {path:'/login',component:Login},
  {path:'/404',component:Empty}
]
export const adminRoutes = [
  {
    title: '首页', // 菜单标题名称
    key: '/admin/user', // 对应的path
    icon: 'icon-zhuye', // 图标名称
  },
  {
    title: '角色管理',
    key: '/admin/role',
    icon: 'icon-jiaoseguanli',
  },
  {
    title: '商品',
    key: '/admin/product',
    icon: 'icon-shangpin',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/admin/product/list',

      },
      {
        title: '商品管理',
        key: '/admin/product/edit',

      },
    ]
  },
  {
    title: '订单管理',
    key: '/admin/order',
    icon: 'icon-74wodedingdan',
    children:[
      {
        title: '订单管理',
        key: '/admin/order/list',

      },
      {
        title: '订单编辑',
        key: '/admin/order/edit',

      }
    ]
  },
]
