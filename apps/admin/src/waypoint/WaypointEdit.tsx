import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ContactTitle } from "../contact/ContactTitle";
import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { IndividualTitle } from "../individual/IndividualTitle";
import { LocationTitle } from "../location/LocationTitle";

export const WaypointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="fulfillmentSpecification.id"
          reference="FulfillmentSpecification"
          label="Fulfillment Specification"
        >
          <SelectInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="individual"
          reference="Individual"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IndividualTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="Waypoint Code" source="waypointCode" />
      </SimpleForm>
    </Edit>
  );
};
