
import { ArgsType, Field } from "@nestjs/graphql";
import { BillingWhereUniqueInput } from "./BillingWhereUniqueInput";
import { BillingUpdateInput } from "./BillingUpdateInput";

@ArgsType()
class UpdateBillingArgs {
  @Field(() => BillingWhereUniqueInput, { nullable: false })
  where!: BillingWhereUniqueInput;
  @Field(() => BillingUpdateInput, { nullable: false })
  data!: BillingUpdateInput;
}

export { UpdateBillingArgs as UpdateBillingArgs };
