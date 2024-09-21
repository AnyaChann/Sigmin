import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { ListProps, ShowProps, EditProps } from 'react-admin';

export const DesignerList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="specialty" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DesignerEdit: React.FC<EditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <TextInput source="specialty" />
    </SimpleForm>
  </Edit>
);

export const DesignerShow: React.FC<ShowProps> = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="specialty" />
    </SimpleShowLayout>
  </Show>
);