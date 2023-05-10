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

import { INDIVIDUAL_TITLE_FIELD } from "../individual/IndividualTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { RATING_TITLE_FIELD } from "./RatingTitle";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const RatingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Courier" source="courier.id" reference="Courier">
          <TextField source={COURIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Entity" source="entity" />
        <TextField label="Entity ID" source="entityId" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
        <ReferenceManyField reference="Image" target="RatingId" label="Images">
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
        <ReferenceManyField
          reference="MediaFile"
          target="RatingId"
          label="MediaFiles"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="MenuItems"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Mime Type" source="mimeType" />
            <ReferenceField
              label="Rating"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URL" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
