
import { ArgsType, Field } from "@nestjs/graphql";
import { ItemQuantityWhereUniqueInput } from "./ItemQuantityWhereUniqueInput";
import { ItemQuantityUpdateInput } from "./ItemQuantityUpdateInput";

@ArgsType()
class UpdateItemQuantityArgs {
  @Field(() => ItemQuantityWhereUniqueInput, { nullable: false })
  where!: ItemQuantityWhereUniqueInput;
  @Field(() => ItemQuantityUpdateInput, { nullable: false })
  data!: ItemQuantityUpdateInput;
}

export { UpdateItemQuantityArgs as UpdateItemQuantityArgs };
