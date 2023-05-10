
import { ArgsType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "./SearchWhereUniqueInput";

@ArgsType()
class SearchFindUniqueArgs {
  @Field(() => SearchWhereUniqueInput, { nullable: false })
  where!: SearchWhereUniqueInput;
}

export { SearchFindUniqueArgs as SearchFindUniqueArgs };
