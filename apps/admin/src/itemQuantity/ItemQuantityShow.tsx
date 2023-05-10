import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SCALAR_TITLE_FIELD } from "../scalar/ScalarTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const ItemQuantityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Allocated Count" source="allocatedCount" />
        <ReferenceField
          label="Allocated Measure"
          source="scalar.id"
          reference="Scalar"
        >
          <TextField source={SCALAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Available Count" source="availableCount" />
        <ReferenceField
          label="Available Measure"
          source="scalar.id"
          reference="Scalar"
        >
          <TextField source={SCALAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField
          label="Maximum Purchasable Count"
          source="maximumPurchasableCount"
        />
        <ReferenceField
          label="Maximum Purchasable Measure"
          source="scalar.id"
          reference="Scalar"
        >
          <TextField source={SCALAR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="MenuItem"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Minimum Purchasable Count"
          source="minimumPurchasableCount"
        />
        <ReferenceField
          label="Minimum Purchasable Measure"
          source="scalar.id"
          reference="Scalar"
        >
          <TextField source={SCALAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Selected Count" source="selectedCount" />
        <ReferenceField
          label="Selected Measure"
          source="scalar.id"
          reference="Scalar"
        >
          <TextField source={SCALAR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
