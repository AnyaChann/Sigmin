import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { ListProps, ShowProps, EditProps } from 'react-admin';


export const UserList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export const UserEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export const UserShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);