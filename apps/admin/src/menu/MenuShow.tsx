import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MENU_TITLE_FIELD } from "./MenuTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const MenuShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category IDs" source="categoryIDs" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fulfillment Modes" source="fulfillmentModes" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="HourInterval"
          target="MenuId"
          label="Hour Intervals"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Days" source="days" />
            <TextField label="From Hour" source="fromHour" />
            <TextField label="From Minute" source="fromMinute" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Menus" source="menu.id" reference="Menu">
              <TextField source={MENU_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="To Hour" source="toHour" />
            <TextField label="To Minute" source="toMinute" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
