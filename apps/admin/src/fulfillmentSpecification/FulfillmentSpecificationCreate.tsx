import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { CourierTitle } from "../courier/CourierTitle";
import { OrderTitle } from "../order/OrderTitle";
import { SearchTitle } from "../search/SearchTitle";
import { SellerTitle } from "../seller/SellerTitle";
import { TrackingTitle } from "../tracking/TrackingTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";
import { WaypointTitle } from "../waypoint/WaypointTitle";

export const FulfillmentSpecificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="buyer.id" reference="User" label="Buyer">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <SelectInput
          source="fulfillmentModes"
          label="Fulfillment Modes"
          choices={[
            { label: "PICK_UP", value: "PickUp" },
            { label: "DELIVERY", value: "Delivery" },
            { label: "DINE_IN", value: "DineIn" },
            { label: "TAKE_OUT", value: "TakeOut" },
            { label: "DRIVE_THRU", value: "DriveThru" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Is Rateable" source="isRateable" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Rating" source="rating" />
        <ReferenceArrayInput
          source="searches"
          reference="Search"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SearchTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "NEW_ORDER", value: "NewOrder" },
            { label: "CONFIRMED", value: "Confirmed" },
            { label: "PICKED_UP", value: "PickedUp" },
            { label: "CANCELED", value: "Canceled" },
            { label: "FULFILLED", value: "Fulfilled" },
            { label: "PREPARED", value: "Prepared" },
            { label: "REJECTED", value: "Rejected" },
            { label: "COURIER_REQUESTED", value: "CourierRequested" },
            { label: "COURIER_ASSIGNED", value: "CourierAssigned" },
            { label: "COURIER_PICKED_UP", value: "CourierPickedUp" },
            { label: "COURIER_COMPLETED", value: "CourierCompleted" },
            { label: "COURIER_CANCELED", value: "CourierCanceled" },
            {
              label: "COURIER_ARRIVED_AT_PICKUP",
              value: "CourierArrivedAtPickup",
            },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="tracking.id"
          reference="Tracking"
          label="Tracking"
        >
          <SelectInput optionText={TrackingTitle} />
        </ReferenceInput>
        <TextInput label="Updated By" source="updatedBy" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="waypoints"
          reference="Waypoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WaypointTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
