
import { ArgsType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "./SearchWhereUniqueInput";
import { SearchUpdateInput } from "./SearchUpdateInput";

@ArgsType()
class UpdateSearchArgs {
  @Field(() => SearchWhereUniqueInput, { nullable: false })
  where!: SearchWhereUniqueInput;
  @Field(() => SearchUpdateInput, { nullable: false })
  data!: SearchUpdateInput;
}

export { UpdateSearchArgs as UpdateSearchArgs };
