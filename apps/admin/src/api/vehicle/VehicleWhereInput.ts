import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FulfillmentSpecificationListRelationFilter } from "../fulfillmentSpecification/FulfillmentSpecificationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type VehicleWhereInput = {
  capacity?: IntNullableFilter;
  category?: StringNullableFilter;
  code?: StringNullableFilter;
  color?: StringNullableFilter;
  fulfillmentSpecifications?: FulfillmentSpecificationListRelationFilter;
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  registration?: StringNullableFilter;
  size?: StringNullableFilter;
  volume?: StringNullableFilter;
  wheelsCount?: IntNullableFilter;
};
