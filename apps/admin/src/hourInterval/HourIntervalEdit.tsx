import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MenuTitle } from "../menu/MenuTitle";

export const HourIntervalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Days"
          source="days"
          choices={[
            { label: "MONDAY", value: "Monday" },
            { label: "TUESDAY", value: "Tuesday" },
            { label: "WEDNESDAY", value: "Wednesday" },
            { label: "THURSDAY", value: "Thursday" },
            { label: "FRIDAY", value: "Friday" },
            { label: "SATURDAY", value: "Saturday" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="From Hour" source="fromHour" />
        <NumberInput step={1} label="From Minute" source="fromMinute" />
        <ReferenceInput source="menus.id" reference="Menu" label="Menus">
          <SelectInput optionText={MenuTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="To Hour" source="toHour" />
        <NumberInput step={1} label="To Minute" source="toMinute" />
      </SimpleForm>
    </Edit>
  );
};
