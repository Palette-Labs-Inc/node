
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationCreateNestedManyWithoutMenuItemsInput {
  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  connect?: Array<OrganizationWhereUniqueInput>;
}

export { OrganizationCreateNestedManyWithoutMenuItemsInput as OrganizationCreateNestedManyWithoutMenuItemsInput };
