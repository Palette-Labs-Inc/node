
import { ArgsType, Field } from "@nestjs/graphql";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ContactUpdateInput } from "./ContactUpdateInput";

@ArgsType()
class UpdateContactArgs {
  @Field(() => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
  @Field(() => ContactUpdateInput, { nullable: false })
  data!: ContactUpdateInput;
}

export { UpdateContactArgs as UpdateContactArgs };
