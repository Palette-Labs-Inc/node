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

import { BAZAAR_TITLE_FIELD } from "./BazaarTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";

export const BazaarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fulfillment Modes" source="fulfillmentModes" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Payment Terms"
          source="paymentterm.id"
          reference="PaymentTerm"
        >
          <TextField source={PAYMENTTERM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time to Live" source="timeToLive" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Promotion"
          target="BazaarId"
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
      </SimpleShowLayout>
    </Show>
  );
};
