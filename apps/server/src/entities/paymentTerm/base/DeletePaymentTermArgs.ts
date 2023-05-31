
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";

@ArgsType()
class DeletePaymentTermArgs {
  @Field(() => PaymentTermWhereUniqueInput, { nullable: false })
  where!: PaymentTermWhereUniqueInput;
}

export { DeletePaymentTermArgs as DeletePaymentTermArgs };
