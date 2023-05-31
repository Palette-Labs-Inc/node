
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentSourceWhereUniqueInput } from "./PaymentSourceWhereUniqueInput";

@ArgsType()
class DeletePaymentSourceArgs {
  @Field(() => PaymentSourceWhereUniqueInput, { nullable: false })
  where!: PaymentSourceWhereUniqueInput;
}

export { DeletePaymentSourceArgs as DeletePaymentSourceArgs };
