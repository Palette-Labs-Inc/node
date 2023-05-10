import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentSourceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payment Sources"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address City" source="addressCity" />
        <TextField label="Address Country" source="addressCountry" />
        <TextField label="Address Line 1" source="addressLine_1" />
        <TextField label="Address Line 2" source="addressLine_2" />
        <TextField label="Address State" source="addressState" />
        <TextField label="Address Zip" source="addressZip" />
        <TextField label="Card Number" source="cardNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency Code" source="currencyCode" />
        <TextField label="CVC" source="cvc" />
        <TextField label="Expiration Month" source="expirationMonth" />
        <TextField label="Expiration Year" source="expirationYear" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
