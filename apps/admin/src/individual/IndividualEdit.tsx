import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContactTitle } from "../contact/ContactTitle";
import { CourierTitle } from "../courier/CourierTitle";
import { ImageTitle } from "../image/ImageTitle";
import { UserTitle } from "../user/UserTitle";
import { WaypointTitle } from "../waypoint/WaypointTitle";

export const IndividualEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="couriers.id"
          reference="Courier"
          label="Couriers"
        >
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <DateInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "NA", value: "Na" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="image"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Middle Name" source="middleName" />
        <TextInput label="Username" source="username" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="waypoints"
          reference="Waypoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WaypointTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
