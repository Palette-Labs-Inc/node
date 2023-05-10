import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";
import { RatingTitle } from "../rating/RatingTitle";

export const MediaFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="menuItems.id"
          reference="MenuItem"
          label="MenuItems"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
        <TextInput label="Mime Type" source="mimeType" />
        <ReferenceInput source="rating.id" reference="Rating" label="Rating">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
