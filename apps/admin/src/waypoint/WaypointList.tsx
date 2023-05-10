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
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const WaypointList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Waypoints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Fulfillment Specification"
          source="fulfillmentspecification.id"
          reference="FulfillmentSpecification"
        >
          <TextField source={FULFILLMENTSPECIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Waypoint Code" source="waypointCode" />
      </Datagrid>
    </List>
  );
};
