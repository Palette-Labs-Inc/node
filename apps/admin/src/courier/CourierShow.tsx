import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURIER_TITLE_FIELD } from "./CourierTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { INDIVIDUAL_TITLE_FIELD } from "../individual/IndividualTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CourierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Inidividual"
          source="individual.id"
          reference="Individual"
        >
          <TextField source={INDIVIDUAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Rating"
          target="CourierId"
          label="Ratings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Entity" source="entity" />
            <TextField label="Entity ID" source="entityId" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
