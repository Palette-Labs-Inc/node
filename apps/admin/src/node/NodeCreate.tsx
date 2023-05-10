import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";

export const NodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Host URL" source="hostUrl" />
        <SelectInput
          source="industryCode"
          label="Industry Code"
          choices={[
            { label: "Last mile delivery", value: "LastMileDelivery" },
            { label: "Rideshare", value: "Rideshare" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="location"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="operatorType"
          label="Operator Type"
          choices={[
            { label: "UNO", value: "Uno" },
            { label: "BSN", value: "Bsn" },
            { label: "SSN", value: "Ssn" },
            { label: "CSN", value: "Csn" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
