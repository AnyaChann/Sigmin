import React from 'react';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import authProvider from './authProvider';
import customRoutes from './components/customRoutes';

import { ProductList, ProductEdit, ProductShow } from './components/products';
import { ProductReviewList, ProductReviewEdit, ProductReviewShow } from './components/productReview';
import { CategoryList, CategoryEdit, CategoryShow } from './components/categories';
import { CustomerList, CustomerEdit, CustomerShow } from './components/customers';
import { DesignerList, DesignerEdit, DesignerShow } from './components/designers';
import { OrderList, OrderEdit, OrderShow } from './components/orders';
// import { Profile } from './components/profile';
import { AdminList, AdminEdit, AdminShow, AdminCreate } from './components/owner/admins';
// import { LogList, LogShow } from './components/owner/logs';

const App: React.FC = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    {permissions => [
      <Resource
        key="products"
        name="products"
        list={ProductList}
        edit={ProductEdit}
        show={ProductShow}
      />,
      <Resource
        key="productReview"
        name="product Review"
        list={ProductReviewList}
        edit={ProductReviewEdit}
        show={ProductReviewShow}
      />,
      <Resource
        key="categories"
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        show={CategoryShow}
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
        />
      ),
      <Resource
        key="customers"
        name="customers"
        list={CustomerList}
        edit={CustomerEdit}
        show={CustomerShow}
      />,
      <Resource
        key="designers"
        name="designers"
        list={DesignerList}
        edit={DesignerEdit}
        show={DesignerShow}
      />,
      <Resource
        key="orders"
        name="orders"
        list={OrderList}
        edit={OrderEdit}
        show={OrderShow}
      />
    ]}
    <CustomRoutes>
      {customRoutes}
    </CustomRoutes>
  </Admin>
);

export default App;