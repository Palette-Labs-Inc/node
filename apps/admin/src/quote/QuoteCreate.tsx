import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const QuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Currency Code" source="currencyCode" />
        <ReferenceArrayInput
          source="menuItems"
          reference="MenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Time to Live" source="timeToLive" />
        <NumberInput label="Total Price" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
