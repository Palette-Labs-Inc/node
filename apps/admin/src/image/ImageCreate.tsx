import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IndividualTitle } from "../individual/IndividualTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";
import { RatingTitle } from "../rating/RatingTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Height" source="height" />
        <ReferenceInput
          source="individuals.id"
          reference="Individual"
          label="Individuals"
        >
          <SelectInput optionText={IndividualTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="menuItem.id"
          reference="MenuItem"
          label="MenuItem"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
        <ReferenceInput source="rating.id" reference="Rating" label="Rating">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <TextInput label="URL" source="url" />
        <TextInput label="Width" source="width" />
      </SimpleForm>
    </Create>
  );
};
