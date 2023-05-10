import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";

export const MediaFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MediaFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="MenuItems"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Mime Type" source="mimeType" />
        <ReferenceField label="Rating" source="rating.id" reference="Rating">
          <TextField source={RATING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </Datagrid>
    </List>
  );
};
