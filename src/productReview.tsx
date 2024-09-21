import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { ListProps, EditProps, ShowProps } from 'react-admin';

export const ProductReviewList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="comment" />
      <NumberField source="product_id" />
      <NumberField source="user_id" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ProductReviewEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="comment" />
      <NumberInput source="product_id" />
      <NumberInput source="user_id" />
    </SimpleForm>
  </Edit>
);

export const ProductReviewShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="comment" />
      <NumberField source="product_id" />
      <NumberField source="user_id" />
    </SimpleShowLayout>
  </Show>
);