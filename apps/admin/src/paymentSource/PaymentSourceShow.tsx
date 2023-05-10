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

import { BAZAAR_TITLE_FIELD } from "../bazaar/BazaarTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PAYMENTSOURCE_TITLE_FIELD } from "./PaymentSourceTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentSourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address City" source="addressCity" />
        <TextField label="Address Country" source="addressCountry" />
        <TextField label="Address Line 1" source="addressLine_1" />
        <TextField label="Address Line 2" source="addressLine_2" />
        <TextField label="Address State" source="addressState" />
        <TextField label="Address Zip" source="addressZip" />
        <TextField label="Card Number" source="cardNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency Code" source="currencyCode" />
        <TextField label="CVC" source="cvc" />
        <TextField label="Expiration Month" source="expirationMonth" />
        <TextField label="Expiration Year" source="expirationYear" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="PaymentTerm"
          target="PaymentSourceId"
          label="PaymentTerms"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Bazaar"
              source="bazaar.id"
              reference="Bazaar"
            >
              <TextField source={BAZAAR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Collected By" source="collectedBy" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField
              label="Lifecycle Processing"
              source="lifecycleProcessing"
            />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Amount" source="paymentAmount" />
            <ReferenceField
              label="Payment Source"
              source="paymentsource.id"
              reference="PaymentSource"
            >
              <TextField source={PAYMENTSOURCE_TITLE_FIELD} />
            </ReferenceField>
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
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
