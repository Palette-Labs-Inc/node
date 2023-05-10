import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FulfillmentSpecificationTitle } from "../fulfillmentSpecification/FulfillmentSpecificationTitle";
import { IndividualTitle } from "../individual/IndividualTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { UserTitle } from "../user/UserTitle";

export const CourierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="fulfillmentSpecifications"
          reference="FulfillmentSpecification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FulfillmentSpecificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="inidividual.id"
          reference="Individual"
          label="Inidividual"
        >
          <SelectInput optionText={IndividualTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="organization"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Rating" source="rating" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
