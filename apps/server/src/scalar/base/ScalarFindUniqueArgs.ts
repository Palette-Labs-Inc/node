
import { ArgsType, Field } from "@nestjs/graphql";
import { ScalarWhereUniqueInput } from "./ScalarWhereUniqueInput";

@ArgsType()
class ScalarFindUniqueArgs {
  @Field(() => ScalarWhereUniqueInput, { nullable: false })
  where!: ScalarWhereUniqueInput;
}

export { ScalarFindUniqueArgs as ScalarFindUniqueArgs };
