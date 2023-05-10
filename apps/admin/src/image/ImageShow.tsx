import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INDIVIDUAL_TITLE_FIELD } from "../individual/IndividualTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Height" source="height" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Individuals"
          source="individual.id"
          reference="Individual"
        >
          <TextField source={INDIVIDUAL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="MenuItem"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Rating" source="rating.id" reference="Rating">
          <TextField source={RATING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
        <TextField label="Width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
