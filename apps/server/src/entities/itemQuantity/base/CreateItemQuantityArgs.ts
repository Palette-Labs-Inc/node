
import { ArgsType, Field } from "@nestjs/graphql";
import { ItemQuantityCreateInput } from "./ItemQuantityCreateInput";

@ArgsType()
class CreateItemQuantityArgs {
  @Field(() => ItemQuantityCreateInput, { nullable: false })
  data!: ItemQuantityCreateInput;
}

export { CreateItemQuantityArgs as CreateItemQuantityArgs };
