import { PaymentTermUpdateManyWithoutPaymentSourcesInput } from "./PaymentTermUpdateManyWithoutPaymentSourcesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentSourceUpdateInput = {
  addressCity?: string;
  addressCountry?: string;
  addressLine_1?: string;
  addressLine_2?: string;
  addressState?: string;
  addressZip?: string;
  cardNumber?: string;
  currencyCode?: string;
  cvc?: number;
  expirationMonth?: number;
  expirationYear?: number;
  name?: string;
  payments?: PaymentTermUpdateManyWithoutPaymentSourcesInput;
  users?: UserWhereUniqueInput | null;
};
