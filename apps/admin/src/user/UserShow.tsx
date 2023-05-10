import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { TRACKING_TITLE_FIELD } from "../tracking/TrackingTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";
import { INDIVIDUAL_TITLE_FIELD } from "../individual/IndividualTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Courier" source="courier.id" reference="Courier">
          <TextField source={COURIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Individual"
          source="individual.id"
          reference="Individual"
        >
          <TextField source={INDIVIDUAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="FulfillmentSpecification"
          target="UserId"
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
        <ReferenceManyField
          reference="PaymentSource"
          target="UserId"
          label="Payment Sources"
        >
          <Datagrid rowClick="show">
            <TextField label="Address City" source="addressCity" />
            <TextField label="Address Country" source="addressCountry" />
            <TextField label="Address Line 1" source="addressLine_1" />
            <TextField label="Address Line 2" source="addressLine_2" />
            <TextField label="Address State" source="addressState" />
            <TextField label="Address Zip" source="addressZip" />
            <TextField label="Card Number" source="cardNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency Code" source="currencyCode" />
            <TextField label="CVC" source="cvc" />
            <TextField label="Expiration Month" source="expirationMonth" />
            <TextField label="Expiration Year" source="expirationYear" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
