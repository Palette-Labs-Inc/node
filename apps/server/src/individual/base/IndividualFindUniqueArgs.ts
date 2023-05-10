
import { ArgsType, Field } from "@nestjs/graphql";
import { IndividualWhereUniqueInput } from "./IndividualWhereUniqueInput";

@ArgsType()
class IndividualFindUniqueArgs {
  @Field(() => IndividualWhereUniqueInput, { nullable: false })
  where!: IndividualWhereUniqueInput;
}

export { IndividualFindUniqueArgs as IndividualFindUniqueArgs };
