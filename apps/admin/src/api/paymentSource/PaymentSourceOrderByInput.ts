import { SortOrder } from "../../util/SortOrder";

export type PaymentSourceOrderByInput = {
  addressCity?: SortOrder;
  addressCountry?: SortOrder;
  addressLine_1?: SortOrder;
  addressLine_2?: SortOrder;
  addressState?: SortOrder;
  addressZip?: SortOrder;
  cardNumber?: SortOrder;
  createdAt?: SortOrder;
  currencyCode?: SortOrder;
  cvc?: SortOrder;
  expirationMonth?: SortOrder;
  expirationYear?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  usersId?: SortOrder;
};
