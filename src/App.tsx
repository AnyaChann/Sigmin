import React from 'react';
import { Admin, Resource, CustomRoutes, Layout } from 'react-admin';
// import { Route } from 'react-router-dom';
import { dataProvider } from './dataProvider';
import authProvider from './authProvider';
import customRoutes from './components/customRoutes';

import { ProductList, ProductEdit, ProductShow } from './components/products';
import { ProductReviewList, ProductReviewEdit, ProductReviewShow } from './components/productReview';
import { CategoryList, CategoryEdit, CategoryShow } from './components/categories';
import { CustomerList, CustomerEdit, CustomerShow } from './components/customers';
import { DesignerList, DesignerEdit, DesignerShow } from './components/designers';
import { OrderList, OrderEdit, OrderShow } from './components/orders';
// import Profile from './components/profile';
import { AdminList, AdminEdit, AdminShow, AdminCreate } from './components/owner/admins';
// import { LogList, LogShow } from './components/owner/logs';

import ProductsIcon from '@mui/icons-material/Store';
import ProductReviewIcon from '@mui/icons-material/RateReview';
import CategoryIcon from '@mui/icons-material/Category';
import CustomerIcon from '@mui/icons-material/People';
import DesignerIcon from '@mui/icons-material/Brush';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import AdminIcon from '@mui/icons-material/SupervisorAccount';
// import ProfileIcon from '@mui/icons-material/AccountCircle';

const App: React.FC = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    {permissions => [
      <Resource
        key="products"
        name="products"
        list={ProductList}
        edit={ProductEdit}
        show={ProductShow}
        icon={ProductsIcon}
      />,
      <Resource
        key="productReview"
        name="product Review"
        list={ProductReviewList}
        edit={ProductReviewEdit}
        show={ProductReviewShow}
        icon={ProductReviewIcon}
      />,
      <Resource
        key="categories"
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        show={CategoryShow}
        icon={CategoryIcon}
      />,
      // permissions === 'Owner' && (
      //   <Resource
      //     name="logs"
      //     list={LogList}
      //     show={LogShow}
      //   />
      // ),
      permissions === 'Owner' && (
        <Resource
          key={'admins'}
          name="admins"
          list={AdminList}
          edit={AdminEdit}
          show={AdminShow}
          create={AdminCreate}
          icon={AdminIcon}
        />
      ),
      <Resource
        key="customers"
        name="customers"
        list={CustomerList}
        edit={CustomerEdit}
        show={CustomerShow}
        icon={CustomerIcon}
      />,
      <Resource
        key="designers"
        name="designers"
        list={DesignerList}
        edit={DesignerEdit}
        show={DesignerShow}
        icon={DesignerIcon}
      />,
      <Resource
        key="orders"
        name="orders"
        list={OrderList}
        edit={OrderEdit}
        show={OrderShow}
        icon={OrderIcon}
      />
    ]}
  <CustomRoutes>
    {customRoutes}
  </CustomRoutes>
</Admin>
);

export default App;