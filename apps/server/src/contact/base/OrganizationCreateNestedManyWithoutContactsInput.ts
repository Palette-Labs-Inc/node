
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationCreateNestedManyWithoutContactsInput {
  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  connect?: Array<OrganizationWhereUniqueInput>;
}

export { OrganizationCreateNestedManyWithoutContactsInput as OrganizationCreateNestedManyWithoutContactsInput };
