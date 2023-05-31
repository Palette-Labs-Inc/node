
import { ArgsType, Field } from "@nestjs/graphql";
import { SearchCreateInput } from "./SearchCreateInput";

@ArgsType()
class CreateSearchArgs {
  @Field(() => SearchCreateInput, { nullable: false })
  data!: SearchCreateInput;
}

export { CreateSearchArgs as CreateSearchArgs };
