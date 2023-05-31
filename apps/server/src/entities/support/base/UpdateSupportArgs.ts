
import { ArgsType, Field } from "@nestjs/graphql";
import { SupportWhereUniqueInput } from "./SupportWhereUniqueInput";
import { SupportUpdateInput } from "./SupportUpdateInput";

@ArgsType()
class UpdateSupportArgs {
  @Field(() => SupportWhereUniqueInput, { nullable: false })
  where!: SupportWhereUniqueInput;
  @Field(() => SupportUpdateInput, { nullable: false })
  data!: SupportUpdateInput;
}

export { UpdateSupportArgs as UpdateSupportArgs };
