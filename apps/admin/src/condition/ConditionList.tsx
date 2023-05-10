import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const ConditionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Conditions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
