import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LocationTitle } from "../location/LocationTitle";

export const ConditionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BSN ID" source="bsnId" />
        <TextInput label="BSN URL" source="bsnUrl" />
        <TextInput label="CSN ID" source="csnId" />
        <TextInput label="CSN URL" source="csnUrl" />
        <TextInput label="Industry Code" source="industryCode" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="Message ID" source="messageId" />
        <TextInput label="Method" source="method" />
        <TextInput label="Public Key" source="publicKey" />
        <TextInput label="SSN ID" source="ssnId" />
        <TextInput label="SSN URL" source="ssnUrl" />
        <TextInput label="Time to Live" source="timeToLive" />
        <TextInput label="Transaction ID" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
