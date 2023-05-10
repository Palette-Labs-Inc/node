import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  ReferenceArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { HourIntervalTitle } from "../hourInterval/HourIntervalTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const MenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
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
        <ReferenceArrayInput
          source="hourIntervals"
          reference="HourInterval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HourIntervalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
