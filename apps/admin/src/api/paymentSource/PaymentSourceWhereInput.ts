import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { PaymentTermListRelationFilter } from "../paymentTerm/PaymentTermListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentSourceWhereInput = {
  addressCity?: StringFilter;
  addressCountry?: StringFilter;
  addressLine_1?: StringFilter;
  addressLine_2?: StringFilter;
  addressState?: StringFilter;
  addressZip?: StringFilter;
  cardNumber?: StringFilter;
  currencyCode?: StringFilter;
  cvc?: IntFilter;
  expirationMonth?: IntFilter;
  expirationYear?: IntFilter;
  id?: StringFilter;
  name?: StringFilter;
  payments?: PaymentTermListRelationFilter;
  users?: UserWhereUniqueInput;
};
