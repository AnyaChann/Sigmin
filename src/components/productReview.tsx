import { List, Datagrid, TextField, NumberField, EditButton, ShowButton, DeleteButton, ReferenceField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';
import { ListProps, EditProps, ShowProps } from 'react-admin';

export const ProductReviewList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="comment" />
      <NumberField source="product_id" />
      <ReferenceField source="user_id" reference="customers">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
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
      <ReferenceInput source="user_id" reference="customers">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ProductReviewShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="comment" />
      <NumberField source="product_id" />
      <ReferenceField source="user_id" reference="customers">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);