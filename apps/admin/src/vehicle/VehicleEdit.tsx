import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Capacity" source="capacity" />
        <TextInput label="Category" source="category" />
        <TextInput label="Code" source="code" />
        <TextInput label="Color" source="color" />
        <ReferenceArrayInput
          source="fulfillmentSpecifications"
          reference="FulfillmentSpecification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Make" source="make" />
        <TextInput label="Model" source="model" />
        <TextInput label="Registration" source="registration" />
        <TextInput label="Size" source="size" />
        <TextInput label="Volume" source="volume" />
        <NumberInput step={1} label="Wheels Count" source="wheelsCount" />
      </SimpleForm>
    </Edit>
  );
};
