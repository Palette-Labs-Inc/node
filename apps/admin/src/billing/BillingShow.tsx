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

import { BILLING_TITLE_FIELD } from "./BillingTitle";
import { CANCELLATION_TITLE_FIELD } from "../cancellation/CancellationTitle";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const BillingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Phone" source="phone" />
        <TextField label="State" source="state" />
        <TextField label="Tax ID" source="taxId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="BillingId" label="Orders">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Billing"
              source="billing.id"
              reference="Billing"
            >
              <TextField source={BILLING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Cancellation"
              source="cancellation.id"
              reference="Cancellation"
            >
              <TextField source={CANCELLATION_TITLE_FIELD} />
            </ReferenceField>
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
              label="Payment Term"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reference Order Ids" source="referenceOrderIds" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
