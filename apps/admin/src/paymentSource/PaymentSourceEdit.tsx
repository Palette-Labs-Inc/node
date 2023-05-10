import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentSourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address City" source="addressCity" />
        <TextInput label="Address Country" source="addressCountry" />
        <TextInput label="Address Line 1" source="addressLine_1" />
        <TextInput label="Address Line 2" source="addressLine_2" />
        <TextInput label="Address State" source="addressState" />
        <TextInput label="Address Zip" source="addressZip" />
        <TextInput label="Card Number" source="cardNumber" />
        <TextInput label="Currency Code" source="currencyCode" />
        <NumberInput step={1} label="CVC" source="cvc" />
        <NumberInput
          step={1}
          label="Expiration Month"
          source="expirationMonth"
        />
        <NumberInput step={1} label="Expiration Year" source="expirationYear" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="payments"
          reference="PaymentTerm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTermTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
