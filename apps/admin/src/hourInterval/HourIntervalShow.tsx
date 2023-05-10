import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MENU_TITLE_FIELD } from "../menu/MenuTitle";

export const HourIntervalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Days" source="days" />
        <TextField label="From Hour" source="fromHour" />
        <TextField label="From Minute" source="fromMinute" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Menus" source="menu.id" reference="Menu">
          <TextField source={MENU_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="To Hour" source="toHour" />
        <TextField label="To Minute" source="toMinute" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
