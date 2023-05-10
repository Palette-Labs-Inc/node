import { FulfillmentSpecificationUpdateManyWithoutCouriersInput } from "./FulfillmentSpecificationUpdateManyWithoutCouriersInput";
import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { OrganizationUpdateManyWithoutCouriersInput } from "./OrganizationUpdateManyWithoutCouriersInput";
import { RatingUpdateManyWithoutCouriersInput } from "./RatingUpdateManyWithoutCouriersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourierUpdateInput = {
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutCouriersInput;
  inidividual?: IndividualWhereUniqueInput | null;
  organization?: OrganizationUpdateManyWithoutCouriersInput;
  rating?: number | null;
  ratings?: RatingUpdateManyWithoutCouriersInput;
  users?: UserWhereUniqueInput;
};
