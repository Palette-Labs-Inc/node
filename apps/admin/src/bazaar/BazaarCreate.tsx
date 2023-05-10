import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  NumberInput,
} from "react-admin";

import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const BazaarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Fulfillment Modes"
          source="fulfillmentModes"
          choices={[
            { label: "PICK_UP", value: "PickUp" },
            { label: "DELIVERY", value: "Delivery" },
            { label: "DINE_IN", value: "DineIn" },
            { label: "TAKE_OUT", value: "TakeOut" },
            { label: "DRIVE_THRU", value: "DriveThru" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="paymentTerms.id"
          reference="PaymentTerm"
          label="Payment Terms"
        >
          <SelectInput optionText={PaymentTermTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="promotions"
          reference="Promotion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromotionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sellers"
          reference="Seller"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SellerTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Time to Live" source="timeToLive" />
      </SimpleForm>
    </Create>
  );
};
