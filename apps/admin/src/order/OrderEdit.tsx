import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BillingTitle } from "../billing/BillingTitle";
import { CancellationTitle } from "../cancellation/CancellationTitle";
import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="billing.id" reference="Billing" label="Billing">
          <SelectInput optionText={BillingTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="cancellation.id"
          reference="Cancellation"
          label="Cancellation"
        >
          <SelectInput optionText={CancellationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="fulfillmentSpecification.id"
          reference="FulfillmentSpecification"
          label="Fulfillment Specification"
        >
          <SelectInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="menuItems"
          reference="MenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="paymentTerm.id"
          reference="PaymentTerm"
          label="Payment Term"
        >
          <SelectInput optionText={PaymentTermTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="promotion"
          reference="Promotion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromotionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Reference Order Ids" source="referenceOrderIds" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "ACTIVE", value: "Active" },
            { label: "COMPLETE", value: "Complete" },
            { label: "CANCELLED", value: "Cancelled" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
