import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FULFILLMENTSPECIFICATION_TITLE_FIELD } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";

export const SearchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Searches"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
