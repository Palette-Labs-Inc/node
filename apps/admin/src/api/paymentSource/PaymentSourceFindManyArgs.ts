import { PaymentSourceWhereInput } from "./PaymentSourceWhereInput";
import { PaymentSourceOrderByInput } from "./PaymentSourceOrderByInput";

export type PaymentSourceFindManyArgs = {
  where?: PaymentSourceWhereInput;
  orderBy?: Array<PaymentSourceOrderByInput>;
  skip?: number;
  take?: number;
};
