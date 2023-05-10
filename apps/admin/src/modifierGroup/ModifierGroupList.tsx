import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const ModifierGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Modifier Groups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
