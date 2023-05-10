import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ItemQuantityTitle } from "../itemQuantity/ItemQuantityTitle";

export const ScalarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="classification"
          label="Classification"
          choices={[
            { label: "CONSTANT", value: "Constant" },
            { label: "VARIABLE", value: "Variable" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Computed Value" source="computedValue" />
        <NumberInput label="Estimated Value" source="estimatedValue" />
        <ReferenceArrayInput
          source="itemQuantityAllocatedMeasure"
          reference="ItemQuantity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemQuantityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="itemQuantityAvailableMeasure"
          reference="ItemQuantity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemQuantityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="itemQuantityMaximumPurchasableMeasure"
          reference="ItemQuantity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemQuantityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="itemQuantityMinimumPurchasableMeasure"
          reference="ItemQuantity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemQuantityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="itemQuantitySelectedMeasure"
          reference="ItemQuantity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemQuantityTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="Unit" source="unit" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
