import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const ModifierGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField
          label="Maximum Per Modifier Selection Quantity"
          source="maximumPerModifierSelectionQuantity"
        />
        <TextField label="Maximum Selections" source="maximumSelections" />
        <TextField label="Menu Item IDs" source="menuItemIDs" />
        <TextField label="Minimum Selections" source="minimumSelections" />
        <ReferenceField
          label="Seller Modifier Groups"
          source="seller.id"
          reference="Seller"
        >
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
