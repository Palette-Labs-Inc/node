
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentTermCreateInput } from "./PaymentTermCreateInput";

@ArgsType()
class CreatePaymentTermArgs {
  @Field(() => PaymentTermCreateInput, { nullable: false })
  data!: PaymentTermCreateInput;
}

export { CreatePaymentTermArgs as CreatePaymentTermArgs };
