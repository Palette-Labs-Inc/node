
import { ArgsType, Field } from "@nestjs/graphql";
import { ItemQuantityWhereUniqueInput } from "./ItemQuantityWhereUniqueInput";

@ArgsType()
class ItemQuantityFindUniqueArgs {
  @Field(() => ItemQuantityWhereUniqueInput, { nullable: false })
  where!: ItemQuantityWhereUniqueInput;
}

export { ItemQuantityFindUniqueArgs as ItemQuantityFindUniqueArgs };
