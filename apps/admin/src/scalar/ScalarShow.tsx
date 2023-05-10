import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCALAR_TITLE_FIELD } from "./ScalarTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const ScalarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Classification" source="classification" />
        <TextField label="Computed Value" source="computedValue" />
        <TextField label="Estimated Value" source="estimatedValue" />
        <TextField label="ID" source="id" />
        <TextField label="Range" source="range" />
        <TextField label="Unit" source="unit" />
        <TextField label="Value" source="value" />
        <ReferenceManyField
          reference="ItemQuantity"
          target="ScalarId"
          label="Item Quantities"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ItemQuantity"
          target="ScalarId"
          label="Item Quantities"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ItemQuantity"
          target="ScalarId"
          label="Item Quantities"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ItemQuantity"
          target="ScalarId"
          label="Item Quantities"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ItemQuantity"
          target="ScalarId"
          label="Item Quantities"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
