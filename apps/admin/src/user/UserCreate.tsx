import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
  TextInput,
} from "react-admin";

import { CourierTitle } from "../courier/CourierTitle";
import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { IndividualTitle } from "../individual/IndividualTitle";
import { PaymentSourceTitle } from "../paymentSource/PaymentSourceTitle";
import { SellerTitle } from "../seller/SellerTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="fulfillmentSpecifications"
          reference="FulfillmentSpecification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="individual.id"
          reference="Individual"
          label="Individual"
        >
          <SelectInput optionText={IndividualTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="paymentSources"
          reference="PaymentSource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentSourceTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
