
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationUpdateManyWithoutMenuItemsInput {
  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  connect?: Array<OrganizationWhereUniqueInput>;

  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  disconnect?: Array<OrganizationWhereUniqueInput>;

  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  set?: Array<OrganizationWhereUniqueInput>;
}

export { OrganizationUpdateManyWithoutMenuItemsInput as OrganizationUpdateManyWithoutMenuItemsInput };
