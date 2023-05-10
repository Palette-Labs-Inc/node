import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BAZAAR_TITLE_FIELD } from "../bazaar/BazaarTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PAYMENTSOURCE_TITLE_FIELD } from "../paymentSource/PaymentSourceTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const PaymentTermList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentTerms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Bazaar" source="bazaar.id" reference="Bazaar">
          <TextField source={BAZAAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Collected By" source="collectedBy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Lifecycle Processing" source="lifecycleProcessing" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Payment Amount" source="paymentAmount" />
        <ReferenceField
          label="Payment Source"
          source="paymentsource.id"
          reference="PaymentSource"
        >
          <TextField source={PAYMENTSOURCE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Search" source="search.id" reference="Search">
          <TextField source={SEARCH_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
