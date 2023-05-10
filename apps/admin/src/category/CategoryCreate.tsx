import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SellerTitle } from "../seller/SellerTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Time to Live" source="timeToLive" />
      </SimpleForm>
    </Create>
  );
};
