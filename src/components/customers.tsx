import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { ListProps, ShowProps, EditProps } from 'react-admin';


export const CustomerList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CustomerEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <EditButton />
      <DeleteButton />
    </SimpleForm>
  </Edit>
);

export const CustomerShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <EditButton />
      <DeleteButton />
    </SimpleShowLayout>
  </Show>
);