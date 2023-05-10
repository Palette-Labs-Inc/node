
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { OrderCreateNestedManyWithoutBillingsInput } from "./OrderCreateNestedManyWithoutBillingsInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";

@InputType()
class BillingCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  country!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutBillingsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutBillingsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutBillingsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutBillingsInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @Field(() => OrganizationWhereUniqueInput)
  organization!: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  state!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  taxId!: string;
}

export { BillingCreateInput as BillingCreateInput };
