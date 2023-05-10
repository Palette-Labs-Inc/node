import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BazaarTitle } from "../bazaar/BazaarTitle";
import { LocationTitle } from "../location/LocationTitle";
import { OrderTitle } from "../order/OrderTitle";
import { SearchTitle } from "../search/SearchTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="bazaar.id" reference="Bazaar" label="Bazaar">
          <SelectInput optionText={BazaarTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <ReferenceArrayInput
          source="locations"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Maximum Purchase" source="maximumPurchase" />
        <NumberInput label="Minimum Purchase" source="minimumPurchase" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="percentage" source="percentage" />
        <ReferenceInput source="search.id" reference="Search" label="Search">
          <SelectInput optionText={SearchTitle} />
        </ReferenceInput>
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
