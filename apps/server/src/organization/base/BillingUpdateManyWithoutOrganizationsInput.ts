
import { InputType, Field } from "@nestjs/graphql";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BillingUpdateManyWithoutOrganizationsInput {
  @Field(() => [BillingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillingWhereUniqueInput],
  })
  connect?: Array<BillingWhereUniqueInput>;

  @Field(() => [BillingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillingWhereUniqueInput],
  })
  disconnect?: Array<BillingWhereUniqueInput>;

  @Field(() => [BillingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillingWhereUniqueInput],
  })
  set?: Array<BillingWhereUniqueInput>;
}

export { BillingUpdateManyWithoutOrganizationsInput as BillingUpdateManyWithoutOrganizationsInput };
