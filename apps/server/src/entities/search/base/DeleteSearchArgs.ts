
import { ArgsType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "./SearchWhereUniqueInput";

@ArgsType()
class DeleteSearchArgs {
  @Field(() => SearchWhereUniqueInput, { nullable: false })
  where!: SearchWhereUniqueInput;
}

export { DeleteSearchArgs as DeleteSearchArgs };
