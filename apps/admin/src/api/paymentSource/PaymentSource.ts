import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { User } from "../user/User";

export type PaymentSource = {
  addressCity: string;
  addressCountry: string;
  addressLine_1: string;
  addressLine_2: string;
  addressState: string;
  addressZip: string;
  cardNumber: string;
  createdAt: Date;
  currencyCode: string;
  cvc: number;
  expirationMonth: number;
  expirationYear: number;
  id: string;
  name: string;
  payments?: Array<PaymentTerm>;
  updatedAt: Date;
  users?: User | null;
};
