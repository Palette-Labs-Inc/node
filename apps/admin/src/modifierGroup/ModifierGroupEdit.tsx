import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SellerTitle } from "../seller/SellerTitle";

export const ModifierGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Maximum Per Modifier Selection Quantity"
          source="maximumPerModifierSelectionQuantity"
        />
        <NumberInput
          step={1}
          label="Maximum Selections"
          source="maximumSelections"
        />
        <div />
        <NumberInput
          step={1}
          label="Minimum Selections"
          source="minimumSelections"
        />
        <ReferenceInput
          source="sellerModifierGroups.id"
          reference="Seller"
          label="Seller Modifier Groups"
        >
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
