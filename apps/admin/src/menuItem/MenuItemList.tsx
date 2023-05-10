import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ITEMQUANTITY_TITLE_FIELD } from "../itemQuantity/ItemQuantityTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const MenuItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MenuItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
