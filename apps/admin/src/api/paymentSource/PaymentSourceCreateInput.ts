import { PaymentTermCreateNestedManyWithoutPaymentSourcesInput } from "./PaymentTermCreateNestedManyWithoutPaymentSourcesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentSourceCreateInput = {
  addressCity: string;
  addressCountry: string;
  addressLine_1: string;
  addressLine_2: string;
  addressState: string;
  addressZip: string;
  cardNumber: string;
  currencyCode: string;
  cvc: number;
  expirationMonth: number;
  expirationYear: number;
  name: string;
  payments?: PaymentTermCreateNestedManyWithoutPaymentSourcesInput;
  users?: UserWhereUniqueInput | null;
};
