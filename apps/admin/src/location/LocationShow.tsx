import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { NODE_TITLE_FIELD } from "../node/NodeTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { TRACKING_TITLE_FIELD } from "../tracking/TrackingTitle";
import { WAYPOINT_TITLE_FIELD } from "../waypoint/WaypointTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
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
      </SimpleShowLayout>
    </Show>
  );
};
