
import { ArgsType, Field } from "@nestjs/graphql";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";

@ArgsType()
class ContactFindUniqueArgs {
  @Field(() => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
}

export { ContactFindUniqueArgs as ContactFindUniqueArgs };
