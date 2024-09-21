import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { ListProps, ShowProps, EditProps } from 'react-admin';

export const OrderList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="customer" />
      <TextField source="product" />
      <NumberField source="quantity" />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const OrderEdit: React.FC<EditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="customer" />
      <TextInput source="product" />
      <NumberInput source="quantity" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const OrderShow: React.FC<ShowProps> = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="customer" />
      <TextField source="product" />
      <NumberField source="quantity" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);