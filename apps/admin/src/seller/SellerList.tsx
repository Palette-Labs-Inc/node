import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SellerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sellers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Holidays" source="holidays" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Rateable" source="isRateable" />
        <TextField label="Password" source="password" />
        <ReferenceField
          label="Payment Term"
          source="paymentterm.id"
          reference="PaymentTerm"
        >
          <TextField source={PAYMENTTERM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <ReferenceField label="Search" source="search.id" reference="Search">
          <TextField source={SEARCH_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Seller Classification ID"
          source="sellerClassificationId"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
