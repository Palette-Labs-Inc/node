import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BazaarTitle } from "../bazaar/BazaarTitle";
import { OrderTitle } from "../order/OrderTitle";
import { PaymentSourceTitle } from "../paymentSource/PaymentSourceTitle";
import { SearchTitle } from "../search/SearchTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const PaymentTermEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bazaar.id" reference="Bazaar" label="Bazaar">
          <SelectInput optionText={BazaarTitle} />
        </ReferenceInput>
        <SelectInput
          source="collectedBy"
          label="Collected By"
          choices={[
            { label: "SSN", value: "SSN" },
            { label: "BSN", value: "BSN" },
            { label: "CSN", value: "CSN" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="lifecycleProcessing"
          label="Lifecycle Processing"
          choices={[
            { label: "PRE_ORDER", value: "PreOrder" },
            { label: "PRE_FULFILLMENT", value: "PreFulfillment" },
            { label: "ON_FULFILLMENT", value: "OnFulfillment" },
            { label: "POST_FULFILLMENT", value: "PostFulfillment" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Payment Amount" source="paymentAmount" />
        <ReferenceInput
          source="paymentSource.id"
          reference="PaymentSource"
          label="Payment Source"
        >
          <SelectInput optionText={PaymentSourceTitle} />
        </ReferenceInput>
        <ReferenceInput source="search.id" reference="Search" label="Search">
          <SelectInput optionText={SearchTitle} />
        </ReferenceInput>
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PROCESSED", value: "Processed" },
            { label: "COLLECTABLE", value: "Collectable" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
