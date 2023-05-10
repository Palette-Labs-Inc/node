
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentSourceWhereUniqueInput } from "./PaymentSourceWhereUniqueInput";
import { PaymentSourceUpdateInput } from "./PaymentSourceUpdateInput";

@ArgsType()
class UpdatePaymentSourceArgs {
  @Field(() => PaymentSourceWhereUniqueInput, { nullable: false })
  where!: PaymentSourceWhereUniqueInput;
  @Field(() => PaymentSourceUpdateInput, { nullable: false })
  data!: PaymentSourceUpdateInput;
}

export { UpdatePaymentSourceArgs as UpdatePaymentSourceArgs };
