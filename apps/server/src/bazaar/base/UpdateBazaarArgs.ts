
import { ArgsType, Field } from "@nestjs/graphql";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";
import { BazaarUpdateInput } from "./BazaarUpdateInput";

@ArgsType()
class UpdateBazaarArgs {
  @Field(() => BazaarWhereUniqueInput, { nullable: false })
  where!: BazaarWhereUniqueInput;
  @Field(() => BazaarUpdateInput, { nullable: false })
  data!: BazaarUpdateInput;
}

export { UpdateBazaarArgs as UpdateBazaarArgs };
