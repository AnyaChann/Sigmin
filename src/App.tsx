import { Admin, Resource } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

import { ProductList, ProductEdit, ProductShow } from './components/products';
import { ProductReviewList, ProductReviewEdit, ProductReviewShow } from './components/productReview';
import { CategoryList, CategoryEdit, CategoryShow } from './components/categories';
import { UserList, UserEdit, UserShow } from './components/users';

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      show={ProductShow}
    />
    <Resource
      name="product Review"
      list={ProductReviewList}
      edit={ProductReviewEdit}
      show={ProductReviewShow}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      show={CategoryShow}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      show={UserShow}
    />
  </Admin>
);