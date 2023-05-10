import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { FulfillmentSpecificationUpdateManyWithoutUsersInput } from "./FulfillmentSpecificationUpdateManyWithoutUsersInput";
import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { PaymentSourceUpdateManyWithoutUsersInput } from "./PaymentSourceUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type UserUpdateInput = {
  courier?: CourierWhereUniqueInput | null;
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutUsersInput;
  individual?: IndividualWhereUniqueInput | null;
  password?: string;
  paymentSources?: PaymentSourceUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  seller?: SellerWhereUniqueInput | null;
  username?: string;
};
