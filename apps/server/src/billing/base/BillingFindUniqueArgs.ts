
import { ArgsType, Field } from "@nestjs/graphql";
import { BillingWhereUniqueInput } from "./BillingWhereUniqueInput";

@ArgsType()
class BillingFindUniqueArgs {
  @Field(() => BillingWhereUniqueInput, { nullable: false })
  where!: BillingWhereUniqueInput;
}

export { BillingFindUniqueArgs as BillingFindUniqueArgs };
