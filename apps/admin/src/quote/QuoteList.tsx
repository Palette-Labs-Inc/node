import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QuoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Quotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency Code" source="currencyCode" />
        <TextField label="ID" source="id" />
        <TextField label="Time to Live" source="timeToLive" />
        <TextField label="Total Price" source="totalPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
