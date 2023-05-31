
import { ArgsType, Field } from "@nestjs/graphql";
import { SupportWhereUniqueInput } from "./SupportWhereUniqueInput";

@ArgsType()
class DeleteSupportArgs {
  @Field(() => SupportWhereUniqueInput, { nullable: false })
  where!: SupportWhereUniqueInput;
}

export { DeleteSupportArgs as DeleteSupportArgs };
