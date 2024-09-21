import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { ListProps, EditProps, ShowProps } from 'react-admin';

export const CategoryList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="category_name" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CategoryEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="category_name" />
    </SimpleForm>
  </Edit>
);

export const CategoryShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="category_name" />
    </SimpleShowLayout>
  </Show>
);