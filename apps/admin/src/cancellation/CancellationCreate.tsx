import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  BooleanInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const CancellationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="cancelledBy"
          label="Cancelled By"
          choices={[
            { label: "SELLER", value: "Seller" },
            { label: "BUYER", value: "Buyer" },
            { label: "COURIER", value: "Courier" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Is Reason Required" source="isReasonRequired" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <TextInput label="Reason" source="reason" />
      </SimpleForm>
    </Create>
  );
};
