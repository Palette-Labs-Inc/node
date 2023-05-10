import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { FulfillmentSpecificationCreateNestedManyWithoutUsersInput } from "./FulfillmentSpecificationCreateNestedManyWithoutUsersInput";
import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { PaymentSourceCreateNestedManyWithoutUsersInput } from "./PaymentSourceCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type UserCreateInput = {
  courier?: CourierWhereUniqueInput | null;
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutUsersInput;
  individual?: IndividualWhereUniqueInput | null;
  password: string;
  paymentSources?: PaymentSourceCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  seller?: SellerWhereUniqueInput | null;
  username: string;
};
