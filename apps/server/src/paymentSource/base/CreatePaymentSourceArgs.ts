
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentSourceCreateInput } from "./PaymentSourceCreateInput";

@ArgsType()
class CreatePaymentSourceArgs {
  @Field(() => PaymentSourceCreateInput, { nullable: false })
  data!: PaymentSourceCreateInput;
}

export { CreatePaymentSourceArgs as CreatePaymentSourceArgs };
