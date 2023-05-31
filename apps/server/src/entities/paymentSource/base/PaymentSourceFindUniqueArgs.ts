
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentSourceWhereUniqueInput } from "./PaymentSourceWhereUniqueInput";

@ArgsType()
class PaymentSourceFindUniqueArgs {
  @Field(() => PaymentSourceWhereUniqueInput, { nullable: false })
  where!: PaymentSourceWhereUniqueInput;
}

export { PaymentSourceFindUniqueArgs as PaymentSourceFindUniqueArgs };
