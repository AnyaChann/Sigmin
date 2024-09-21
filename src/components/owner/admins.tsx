import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput, Create, ImageInput, ImageField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { ListProps, ShowProps, EditProps, CreateProps } from 'react-admin';

export const AdminList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="username" />
      <TextField source="fullName" />
      <ImageField source="avatar" title="Avatar" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const AdminEdit: React.FC<EditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="username" />
      <TextInput source="password" />
      <TextInput source="fullName" />
      <ImageInput source="avatar" label="Avatar">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const AdminShow: React.FC<ShowProps> = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="username" />
      <TextField source="fullName" />
      <ImageField source="avatar" title="Avatar" />
    </SimpleShowLayout>
  </Show>
);

export const AdminCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="password" />
      <TextInput source="fullName" />
      <ImageInput source="avatar" label="Avatar">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);