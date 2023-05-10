import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SupportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
