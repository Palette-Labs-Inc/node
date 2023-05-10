import { PaymentTermWhereInput } from "./PaymentTermWhereInput";
import { PaymentTermOrderByInput } from "./PaymentTermOrderByInput";

export type PaymentTermFindManyArgs = {
  where?: PaymentTermWhereInput;
  orderBy?: Array<PaymentTermOrderByInput>;
  skip?: number;
  take?: number;
};
