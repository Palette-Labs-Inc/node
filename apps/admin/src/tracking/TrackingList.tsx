import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const TrackingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trackings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Fulfillment Specifications"
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
        <TextField label="Status" source="status" />
        <TextField label="Tracking URL" source="trackingUrl" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
