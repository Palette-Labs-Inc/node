import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { IndividualTitle } from "../individual/IndividualTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { WaypointTitle } from "../waypoint/WaypointTitle";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="fulfillmentSpecifications"
          reference="FulfillmentSpecification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="individuals"
          reference="Individual"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IndividualTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizations"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
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
