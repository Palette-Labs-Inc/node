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
import { INDIVIDUAL_TITLE_FIELD } from "../individual/IndividualTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CourierList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Couriers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Inidividual"
          source="individual.id"
          reference="Individual"
        >
          <TextField source={INDIVIDUAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
