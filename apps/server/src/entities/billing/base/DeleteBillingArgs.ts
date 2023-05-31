
import { ArgsType, Field } from "@nestjs/graphql";
import { BillingWhereUniqueInput } from "./BillingWhereUniqueInput";

@ArgsType()
class DeleteBillingArgs {
  @Field(() => BillingWhereUniqueInput, { nullable: false })
  where!: BillingWhereUniqueInput;
}

export { DeleteBillingArgs as DeleteBillingArgs };
