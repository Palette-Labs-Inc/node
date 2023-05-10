import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { BazaarTitle } from "../bazaar/BazaarTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { LocationTitle } from "../location/LocationTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";
import { MenuTitle } from "../menu/MenuTitle";
import { ModifierGroupTitle } from "../modifierGroup/ModifierGroupTitle";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { SearchTitle } from "../search/SearchTitle";
import { UserTitle } from "../user/UserTitle";

export const SellerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bazaar"
          reference="Bazaar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BazaarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="categories"
          reference="Category"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fulfillmentSpecifications"
          reference="FulfillmentSpecification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceArrayInput>
        <div />
        <BooleanInput label="Is Rateable" source="isRateable" />
        <ReferenceArrayInput
          source="locations"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItems"
          reference="MenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menus"
          reference="Menu"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="modifierGroups"
          reference="ModifierGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ModifierGroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="Password" source="password" />
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
        <NumberInput label="Rating" source="rating" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="search.id" reference="Search" label="Search">
          <SelectInput optionText={SearchTitle} />
        </ReferenceInput>
        <TextInput
          label="Seller Classification ID"
          source="sellerClassificationId"
        />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
