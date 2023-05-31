
import { ArgsType, Field } from "@nestjs/graphql";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";

@ArgsType()
class BazaarFindUniqueArgs {
  @Field(() => BazaarWhereUniqueInput, { nullable: false })
  where!: BazaarWhereUniqueInput;
}

export { BazaarFindUniqueArgs as BazaarFindUniqueArgs };
