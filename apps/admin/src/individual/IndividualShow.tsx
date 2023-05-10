import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INDIVIDUAL_TITLE_FIELD } from "./IndividualTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const IndividualShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Couriers"
          source="courier.id"
          reference="Courier"
        >
          <TextField source={COURIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date of Birth" source="dateOfBirth" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Middle Name" source="middleName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Image"
          target="IndividualId"
          label="Images"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Rating"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URL" source="url" />
            <TextField label="Width" source="width" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
