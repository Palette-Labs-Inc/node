import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ratings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Courier" source="courier.id" reference="Courier">
          <TextField source={COURIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Entity" source="entity" />
        <TextField label="Entity ID" source="entityId" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
