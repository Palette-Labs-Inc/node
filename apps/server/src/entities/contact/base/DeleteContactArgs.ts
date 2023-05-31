
import { ArgsType, Field } from "@nestjs/graphql";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";

@ArgsType()
class DeleteContactArgs {
  @Field(() => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
}

export { DeleteContactArgs as DeleteContactArgs };
