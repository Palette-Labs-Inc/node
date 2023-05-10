
import { ArgsType, Field } from "@nestjs/graphql";
import { ItemQuantityWhereUniqueInput } from "./ItemQuantityWhereUniqueInput";

@ArgsType()
class DeleteItemQuantityArgs {
  @Field(() => ItemQuantityWhereUniqueInput, { nullable: false })
  where!: ItemQuantityWhereUniqueInput;
}

export { DeleteItemQuantityArgs as DeleteItemQuantityArgs };
