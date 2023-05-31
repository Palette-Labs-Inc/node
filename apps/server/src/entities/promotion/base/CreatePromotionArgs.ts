
import { ArgsType, Field } from "@nestjs/graphql";
import { PromotionCreateInput } from "./PromotionCreateInput";

@ArgsType()
class CreatePromotionArgs {
  @Field(() => PromotionCreateInput, { nullable: false })
  data!: PromotionCreateInput;
}

export { CreatePromotionArgs as CreatePromotionArgs };
