
import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";

@ArgsType()
class PaymentTermFindUniqueArgs {
  @Field(() => PaymentTermWhereUniqueInput, { nullable: false })
  where!: PaymentTermWhereUniqueInput;
}

export { PaymentTermFindUniqueArgs as PaymentTermFindUniqueArgs };
