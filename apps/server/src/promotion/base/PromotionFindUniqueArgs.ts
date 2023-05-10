
import { ArgsType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";

@ArgsType()
class PromotionFindUniqueArgs {
  @Field(() => PromotionWhereUniqueInput, { nullable: false })
  where!: PromotionWhereUniqueInput;
}

export { PromotionFindUniqueArgs as PromotionFindUniqueArgs };
