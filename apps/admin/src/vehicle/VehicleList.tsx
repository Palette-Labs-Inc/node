import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Capacity" source="capacity" />
        <TextField label="Category" source="category" />
        <TextField label="Code" source="code" />
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Make" source="make" />
        <TextField label="Model" source="model" />
        <TextField label="Registration" source="registration" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Volume" source="volume" />
        <TextField label="Wheels Count" source="wheelsCount" />
      </Datagrid>
    </List>
  );
};
