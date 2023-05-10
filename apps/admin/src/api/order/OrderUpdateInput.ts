import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";
import { CancellationWhereUniqueInput } from "../cancellation/CancellationWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { MenuItemUpdateManyWithoutOrdersInput } from "./MenuItemUpdateManyWithoutOrdersInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionUpdateManyWithoutOrdersInput } from "./PromotionUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  billing?: BillingWhereUniqueInput;
  cancellation?: CancellationWhereUniqueInput | null;
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput;
  menuItems?: MenuItemUpdateManyWithoutOrdersInput;
  paymentTerm?: PaymentTermWhereUniqueInput | null;
  promotion?: PromotionUpdateManyWithoutOrdersInput;
  referenceOrderIds?: string | null;
  status?: "Active" | "Complete" | "Cancelled";
};
