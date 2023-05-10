import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";
import { CancellationWhereUniqueInput } from "../cancellation/CancellationWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { MenuItemCreateNestedManyWithoutOrdersInput } from "./MenuItemCreateNestedManyWithoutOrdersInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionCreateNestedManyWithoutOrdersInput } from "./PromotionCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  billing: BillingWhereUniqueInput;
  cancellation?: CancellationWhereUniqueInput | null;
  fulfillmentSpecification: FulfillmentSpecificationWhereUniqueInput;
  menuItems?: MenuItemCreateNestedManyWithoutOrdersInput;
  paymentTerm?: PaymentTermWhereUniqueInput | null;
  promotion?: PromotionCreateNestedManyWithoutOrdersInput;
  referenceOrderIds?: string | null;
  status: "Active" | "Complete" | "Cancelled";
};
