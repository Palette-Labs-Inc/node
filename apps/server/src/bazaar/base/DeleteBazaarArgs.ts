
import { ArgsType, Field } from "@nestjs/graphql";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";

@ArgsType()
class DeleteBazaarArgs {
  @Field(() => BazaarWhereUniqueInput, { nullable: false })
  where!: BazaarWhereUniqueInput;
}

export { DeleteBazaarArgs as DeleteBazaarArgs };
