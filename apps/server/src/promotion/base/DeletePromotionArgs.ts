
import { ArgsType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";

@ArgsType()
class DeletePromotionArgs {
  @Field(() => PromotionWhereUniqueInput, { nullable: false })
  where!: PromotionWhereUniqueInput;
}

export { DeletePromotionArgs as DeletePromotionArgs };
