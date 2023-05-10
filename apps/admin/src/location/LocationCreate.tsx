import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ConditionTitle } from "../condition/ConditionTitle";
import { NodeTitle } from "../node/NodeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";
import { SellerTitle } from "../seller/SellerTitle";
import { TrackingTitle } from "../tracking/TrackingTitle";
import { WaypointTitle } from "../waypoint/WaypointTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Area Code" source="areaCode" />
        <TextInput label="City" source="city" />
        <ReferenceArrayInput
          source="conditions"
          reference="Condition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConditionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Coordinate" source="coordinate" />
        <TextInput label="Country" source="country" />
        <TextInput label="Map URL" source="mapUrl" />
        <ReferenceInput source="node.id" reference="Node" label="Node">
          <SelectInput optionText={NodeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizations.id"
          reference="Organization"
          label="Organizations"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="promotion"
          reference="Promotion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromotionTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Radius" source="radius" />
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
        <TextInput label="State" source="state" />
        <ReferenceInput
          source="trackings.id"
          reference="Tracking"
          label="Trackings"
        >
          <SelectInput optionText={TrackingTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="waypoints.id"
          reference="Waypoint"
          label="Waypoints"
        >
          <SelectInput optionText={WaypointTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
