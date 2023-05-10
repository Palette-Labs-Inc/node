import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BILLING_TITLE_FIELD } from "../billing/BillingTitle";
import { CANCELLATION_TITLE_FIELD } from "../cancellation/CancellationTitle";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Billing" source="billing.id" reference="Billing">
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
      </SimpleShowLayout>
    </Show>
  );
};
