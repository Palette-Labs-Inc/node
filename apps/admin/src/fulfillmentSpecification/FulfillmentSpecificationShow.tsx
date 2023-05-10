import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BILLING_TITLE_FIELD } from "../billing/BillingTitle";
import { CANCELLATION_TITLE_FIELD } from "../cancellation/CancellationTitle";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "./FulfillmentSpecificationTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";
import { TRACKING_TITLE_FIELD } from "../tracking/TrackingTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const FulfillmentSpecificationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Buyer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Courier" source="courier.id" reference="Courier">
          <TextField source={COURIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fulfillment Modes" source="fulfillmentModes" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Rateable" source="isRateable" />
        <TextField label="Rating" source="rating" />
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
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
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Order"
          target="FulfillmentSpecificationId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Billing"
              source="billing.id"
              reference="Billing"
            >
              <TextField source={BILLING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Cancellation"
              source="cancellation.id"
              reference="Cancellation"
            >
              <TextField source={CANCELLATION_TITLE_FIELD} />
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
              label="Payment Term"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reference Order Ids" source="referenceOrderIds" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Search"
          target="FulfillmentSpecificationId"
          label="Searches"
        >
          <Datagrid rowClick="show">
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
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Payment Term"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Waypoint"
          target="FulfillmentSpecificationId"
          label="Waypoints"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
