import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SupportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
