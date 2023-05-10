import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { BAZAAR_TITLE_FIELD } from "../bazaar/BazaarTitle";
import { SEARCH_TITLE_FIELD } from "./SearchTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const SearchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Promotion"
          target="SearchId"
          label="Promotions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Bazaar"
              source="bazaar.id"
              reference="Bazaar"
            >
              <TextField source={BAZAAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Maximum Purchase" source="maximumPurchase" />
            <TextField label="Minimum Purchase" source="minimumPurchase" />
            <TextField label="Name" source="name" />
            <TextField label="percentage" source="percentage" />
            <ReferenceField
              label="Search"
              source="search.id"
              reference="Search"
            >
              <TextField source={SEARCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Seller"
          target="SearchId"
          label="Sellers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Holidays" source="holidays" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Rateable" source="isRateable" />
            <TextField label="Password" source="password" />
            <ReferenceField
              label="Payment Term"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Search"
              source="search.id"
              reference="Search"
            >
              <TextField source={SEARCH_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Seller Classification ID"
              source="sellerClassificationId"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
