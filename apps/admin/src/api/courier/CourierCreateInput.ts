import { FulfillmentSpecificationCreateNestedManyWithoutCouriersInput } from "./FulfillmentSpecificationCreateNestedManyWithoutCouriersInput";
import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { OrganizationCreateNestedManyWithoutCouriersInput } from "./OrganizationCreateNestedManyWithoutCouriersInput";
import { RatingCreateNestedManyWithoutCouriersInput } from "./RatingCreateNestedManyWithoutCouriersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourierCreateInput = {
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutCouriersInput;
  inidividual?: IndividualWhereUniqueInput | null;
  organization?: OrganizationCreateNestedManyWithoutCouriersInput;
  rating?: number | null;
  ratings?: RatingCreateNestedManyWithoutCouriersInput;
  users: UserWhereUniqueInput;
};
