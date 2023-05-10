import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { LocationTitle } from "../location/LocationTitle";

export const TrackingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fulfillmentSpecifications.id"
          reference="FulfillmentSpecification"
          label="Fulfillment Specifications"
        >
          <SelectInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "ACTIVE", value: "Active" },
            { label: "INACTIVE", value: "Inactive" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Tracking URL" source="trackingUrl" />
      </SimpleForm>
    </Edit>
  );
};
