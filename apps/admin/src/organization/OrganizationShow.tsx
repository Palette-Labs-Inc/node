import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { NODE_TITLE_FIELD } from "../node/NodeTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { TRACKING_TITLE_FIELD } from "../tracking/TrackingTitle";
import { WAYPOINT_TITLE_FIELD } from "../waypoint/WaypointTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Billing"
          target="OrganizationId"
          label="Billings"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Phone" source="phone" />
            <TextField label="State" source="state" />
            <TextField label="Tax ID" source="taxId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Location"
          target="OrganizationId"
          label="Locations"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Area Code" source="areaCode" />
            <TextField label="City" source="city" />
            <TextField label="Coordinate" source="coordinate" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Map URL" source="mapUrl" />
            <ReferenceField label="Node" source="node.id" reference="Node">
              <TextField source={NODE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organizations"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Radius" source="radius" />
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="State" source="state" />
            <ReferenceField
              label="Trackings"
              source="tracking.id"
              reference="Tracking"
            >
              <TextField source={TRACKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Waypoints"
              source="waypoint.id"
              reference="Waypoint"
            >
              <TextField source={WAYPOINT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
