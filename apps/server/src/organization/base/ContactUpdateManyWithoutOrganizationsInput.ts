
import { InputType, Field } from "@nestjs/graphql";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContactUpdateManyWithoutOrganizationsInput {
  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  connect?: Array<ContactWhereUniqueInput>;

  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  disconnect?: Array<ContactWhereUniqueInput>;

  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  set?: Array<ContactWhereUniqueInput>;
}

export { ContactUpdateManyWithoutOrganizationsInput as ContactUpdateManyWithoutOrganizationsInput };
