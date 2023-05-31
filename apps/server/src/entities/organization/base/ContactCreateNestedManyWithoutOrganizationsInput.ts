
import { InputType, Field } from "@nestjs/graphql";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContactCreateNestedManyWithoutOrganizationsInput {
  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  connect?: Array<ContactWhereUniqueInput>;
}

export { ContactCreateNestedManyWithoutOrganizationsInput as ContactCreateNestedManyWithoutOrganizationsInput };
