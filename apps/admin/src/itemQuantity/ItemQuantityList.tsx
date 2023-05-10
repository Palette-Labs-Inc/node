import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SCALAR_TITLE_FIELD } from "../scalar/ScalarTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const ItemQuantityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Item Quantities"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
