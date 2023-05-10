import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INDIVIDUAL_TITLE_FIELD } from "../individual/IndividualTitle";
import { MENUITEM_TITLE_FIELD } from "./MenuItemTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { ITEMQUANTITY_TITLE_FIELD } from "../itemQuantity/ItemQuantityTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const MenuItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency Code" source="currencyCode" />
        <TextField label="Fulfillment Modes" source="fulfillmentModes" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Rateable" source="isRateable" />
        <TextField label="Location IDs" source="locationIDs" />
        <TextField label="Modifier Group IDs" source="modifierGroupIDs" />
        <TextField label="Payment Modes" source="paymentModes" />
        <TextField label="Price" source="price" />
        <ReferenceField
          label="Quantity"
          source="itemquantity.id"
          reference="ItemQuantity"
        >
          <TextField source={ITEMQUANTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <ReferenceField label="Sellers" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time to Live" source="timeToLive" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Image"
          target="MenuItemId"
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
        <ReferenceManyField
          reference="MediaFile"
          target="MenuItemId"
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
        <ReferenceManyField
          reference="Search"
          target="MenuItemId"
          label="Searches"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Fulfillment Specification"
              source="fulfillmentspecification.id"
              reference="FulfillmentSpecification"
            >
              <TextField source={FULFILLMENTSPECIFICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Payment Term"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
