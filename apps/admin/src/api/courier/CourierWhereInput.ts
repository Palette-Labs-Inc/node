import { StringFilter } from "../../util/StringFilter";
import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourierWhereInput = {
  id?: StringFilter;
  inidividual?: IndividualWhereUniqueInput;
  organization?: OrganizationListRelationFilter;
  rating?: FloatNullableFilter;
  ratings?: RatingListRelationFilter;
  users?: UserWhereUniqueInput;
};
