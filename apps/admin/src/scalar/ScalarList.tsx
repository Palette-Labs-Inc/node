import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ScalarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Scalars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Classification" source="classification" />
        <TextField label="Computed Value" source="computedValue" />
        <TextField label="Estimated Value" source="estimatedValue" />
        <TextField label="ID" source="id" />
        <TextField label="Range" source="range" />
        <TextField label="Unit" source="unit" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
