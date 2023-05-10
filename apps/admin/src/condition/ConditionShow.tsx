import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const ConditionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BSN ID" source="bsnId" />
        <TextField label="BSN URL" source="bsnUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CSN ID" source="csnId" />
        <TextField label="CSN URL" source="csnUrl" />
        <TextField label="ID" source="id" />
        <TextField label="Industry Code" source="industryCode" />
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Message ID" source="messageId" />
        <TextField label="Method" source="method" />
        <TextField label="Public Key" source="publicKey" />
        <TextField label="SSN ID" source="ssnId" />
        <TextField label="SSN URL" source="ssnUrl" />
        <TextField label="Time to Live" source="timeToLive" />
        <TextField label="Transaction ID" source="transactionId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
