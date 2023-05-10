
import { ArgsType, Field } from "@nestjs/graphql";
import { SupportWhereUniqueInput } from "./SupportWhereUniqueInput";

@ArgsType()
class SupportFindUniqueArgs {
  @Field(() => SupportWhereUniqueInput, { nullable: false })
  where!: SupportWhereUniqueInput;
}

export { SupportFindUniqueArgs as SupportFindUniqueArgs };
