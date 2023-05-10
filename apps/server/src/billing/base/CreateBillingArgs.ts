
import { ArgsType, Field } from "@nestjs/graphql";
import { BillingCreateInput } from "./BillingCreateInput";

@ArgsType()
class CreateBillingArgs {
  @Field(() => BillingCreateInput, { nullable: false })
  data!: BillingCreateInput;
}

export { CreateBillingArgs as CreateBillingArgs };
