
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";
import { PaymentTermUpdateInput } from "./PaymentTermUpdateInput";

@ArgsType()
class UpdatePaymentTermArgs {
  @Field(() => PaymentTermWhereUniqueInput, { nullable: false })
  where!: PaymentTermWhereUniqueInput;
  @Field(() => PaymentTermUpdateInput, { nullable: false })
  data!: PaymentTermUpdateInput;
}

export { UpdatePaymentTermArgs as UpdatePaymentTermArgs };
