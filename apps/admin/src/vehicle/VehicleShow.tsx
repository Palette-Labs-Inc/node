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
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { TRACKING_TITLE_FIELD } from "../tracking/TrackingTitle";
import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FulfillmentSpecification"
          target="VehicleId"
          label="Fulfillment Specifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Buyer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fulfillment Modes" source="fulfillmentModes" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Rateable" source="isRateable" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Tracking"
              source="tracking.id"
              reference="Tracking"
            >
              <TextField source={TRACKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Updated By" source="updatedBy" />
            <ReferenceField
              label="Vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
