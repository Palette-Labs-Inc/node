import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SELLER_TITLE_FIELD } from "./SellerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { TRACKING_TITLE_FIELD } from "../tracking/TrackingTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";
import { NODE_TITLE_FIELD } from "../node/NodeTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { WAYPOINT_TITLE_FIELD } from "../waypoint/WaypointTitle";
import { ITEMQUANTITY_TITLE_FIELD } from "../itemQuantity/ItemQuantityTitle";
import { BAZAAR_TITLE_FIELD } from "../bazaar/BazaarTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";

export const SellerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Holidays" source="holidays" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Rateable" source="isRateable" />
        <TextField label="Password" source="password" />
        <ReferenceField
          label="Payment Term"
          source="paymentterm.id"
          reference="PaymentTerm"
        >
          <TextField source={PAYMENTTERM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <ReferenceField label="Search" source="search.id" reference="Search">
          <TextField source={SEARCH_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Seller Classification ID"
          source="sellerClassificationId"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Category"
          target="SellerId"
          label="Categories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Menu Item IDs" source="menuItemIDs" />
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time to Live" source="timeToLive" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FulfillmentSpecification"
          target="SellerId"
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
          reference="Location"
          target="SellerId"
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
        <ReferenceManyField
          reference="MenuItem"
          target="SellerId"
          label="MenuItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency Code" source="currencyCode" />
            <TextField label="Fulfillment Modes" source="fulfillmentModes" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Rateable" source="isRateable" />
            <TextField label="Location IDs" source="locationIDs" />
            <TextField label="Modifier Group IDs" source="modifierGroupIDs" />
            <TextField label="Payment Modes" source="paymentModes" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Quantity"
              source="itemquantity.id"
              reference="ItemQuantity"
            >
              <TextField source={ITEMQUANTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Sellers"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time to Live" source="timeToLive" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Menu" target="SellerId" label="Menus">
          <Datagrid rowClick="show">
            <TextField label="Category IDs" source="categoryIDs" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fulfillment Modes" source="fulfillmentModes" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ModifierGroup"
          target="SellerId"
          label="Modifier Groups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField
              label="Maximum Per Modifier Selection Quantity"
              source="maximumPerModifierSelectionQuantity"
            />
            <TextField label="Maximum Selections" source="maximumSelections" />
            <TextField label="Menu Item IDs" source="menuItemIDs" />
            <TextField label="Minimum Selections" source="minimumSelections" />
            <ReferenceField
              label="Seller Modifier Groups"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Promotion"
          target="SellerId"
          label="Promotions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Bazaar"
              source="bazaar.id"
              reference="Bazaar"
            >
              <TextField source={BAZAAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Maximum Purchase" source="maximumPurchase" />
            <TextField label="Minimum Purchase" source="minimumPurchase" />
            <TextField label="Name" source="name" />
            <TextField label="percentage" source="percentage" />
            <ReferenceField
              label="Search"
              source="search.id"
              reference="Search"
            >
              <TextField source={SEARCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Rating"
          target="SellerId"
          label="Ratings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Entity" source="entity" />
            <TextField label="Entity ID" source="entityId" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Seller"
              source="seller.id"
              reference="Seller"
            >
              <TextField source={SELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
