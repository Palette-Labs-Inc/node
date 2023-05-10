import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";
import { MediaFileTitle } from "../mediaFile/MediaFileTitle";
import { MenuItemTitle } from "./MenuItemTitle";
import { OrderTitle } from "../order/OrderTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ItemQuantityTitle } from "../itemQuantity/ItemQuantityTitle";
import { QuoteTitle } from "../quote/QuoteTitle";
import { SearchTitle } from "../search/SearchTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const MenuItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Currency Code" source="currencyCode" />
        <SelectArrayInput
          label="Fulfillment Modes"
          source="fulfillmentModes"
          choices={[
            { label: "DELIVERY", value: "Delivery" },
            { label: "PICK_UP", value: "PickUp" },
            { label: "DINE_IN", value: "DineIn" },
            { label: "TAKE_OUT", value: "TakeOut" },
            { label: "DRIVE_THRU", value: "DriveThru" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Rateable" source="isRateable" />
        <div />
        <ReferenceArrayInput
          source="mediaFile"
          reference="MediaFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaFileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItemsSelectedModifiers"
          reference="MenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organization"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <div />
        <NumberInput label="Price" source="price" />
        <ReferenceInput
          source="quantity.id"
          reference="ItemQuantity"
          label="Quantity"
        >
          <SelectInput optionText={ItemQuantityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="quotes"
          reference="Quote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuoteTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Rating" source="rating" />
        <ReferenceArrayInput
          source="searches"
          reference="Search"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SearchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="selectedModifiers"
          reference="MenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="sellers.id" reference="Seller" label="Sellers">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Time to Live" source="timeToLive" />
      </SimpleForm>
    </Create>
  );
};
