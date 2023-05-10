import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CourierTitle } from "../courier/CourierTitle";
import { ImageTitle } from "../image/ImageTitle";
import { MediaFileTitle } from "../mediaFile/MediaFileTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <SelectInput
          source="entity"
          label="Entity"
          choices={[
            { label: "ITEM", value: "Item" },
            { label: "ORDER", value: "Order" },
            { label: "FULFILLMENT", value: "Fulfillment" },
            { label: "SELLER", value: "Seller" },
            { label: "COURIER", value: "Courier" },
            { label: "SUPPORT", value: "Support" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Entity ID" source="entityId" />
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="media"
          reference="MediaFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaFileTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
