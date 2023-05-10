
import { InputType, Field } from "@nestjs/graphql";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BillingCreateNestedManyWithoutOrganizationsInput {
  @Field(() => [BillingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillingWhereUniqueInput],
  })
  connect?: Array<BillingWhereUniqueInput>;
}

export { BillingCreateNestedManyWithoutOrganizationsInput as BillingCreateNestedManyWithoutOrganizationsInput };
