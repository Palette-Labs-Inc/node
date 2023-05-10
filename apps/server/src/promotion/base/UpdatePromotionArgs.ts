
import { ArgsType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { PromotionUpdateInput } from "./PromotionUpdateInput";

@ArgsType()
class UpdatePromotionArgs {
  @Field(() => PromotionWhereUniqueInput, { nullable: false })
  where!: PromotionWhereUniqueInput;
  @Field(() => PromotionUpdateInput, { nullable: false })
  data!: PromotionUpdateInput;
}

export { UpdatePromotionArgs as UpdatePromotionArgs };
