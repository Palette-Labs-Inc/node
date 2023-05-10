import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ScalarTitle } from "../scalar/ScalarTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const ItemQuantityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Allocated Count" source="allocatedCount" />
        <ReferenceInput
          source="allocatedMeasure.id"
          reference="Scalar"
          label="Allocated Measure"
        >
          <SelectInput optionText={ScalarTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Available Count" source="availableCount" />
        <ReferenceInput
          source="availableMeasure.id"
          reference="Scalar"
          label="Available Measure"
        >
          <SelectInput optionText={ScalarTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Maximum Purchasable Count"
          source="maximumPurchasableCount"
        />
        <ReferenceInput
          source="maximumPurchasableMeasure.id"
          reference="Scalar"
          label="Maximum Purchasable Measure"
        >
          <SelectInput optionText={ScalarTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="menuItem.id"
          reference="MenuItem"
          label="MenuItem"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Minimum Purchasable Count"
          source="minimumPurchasableCount"
        />
        <ReferenceInput
          source="minimumPurchasableMeasure.id"
          reference="Scalar"
          label="Minimum Purchasable Measure"
        >
          <SelectInput optionText={ScalarTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Selected Count" source="selectedCount" />
        <ReferenceInput
          source="selectedMeasure.id"
          reference="Scalar"
          label="Selected Measure"
        >
          <SelectInput optionText={ScalarTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
