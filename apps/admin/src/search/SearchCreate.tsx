import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const SearchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fulfillmentSpecification.id"
          reference="FulfillmentSpecification"
          label="Fulfillment Specification"
        >
          <SelectInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentTerm.id"
          reference="PaymentTerm"
          label="Payment Term"
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
      </SimpleForm>
    </Create>
  );
};
