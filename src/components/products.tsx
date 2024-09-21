import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { ShowProps, EditProps, ListProps } from 'react-admin';

export const ProductList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="name" />
      <NumberField source="price" />
      <TextField source="category" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ProductEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <NumberInput source="price" />
      <TextInput source="category" />
    </SimpleForm>
  </Edit>
);

export const ProductShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <NumberField source="price" />
      <TextField source="category" />
    </SimpleShowLayout>
  </Show>
);