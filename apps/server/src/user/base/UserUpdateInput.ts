
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecificationUpdateManyWithoutUsersInput } from "./FulfillmentSpecificationUpdateManyWithoutUsersInput";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { PaymentSourceUpdateManyWithoutUsersInput } from "./PaymentSourceUpdateManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierWhereUniqueInput, {
    nullable: true,
  })
  courier?: CourierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => IndividualWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereUniqueInput)
  @IsOptional()
  @Field(() => IndividualWhereUniqueInput, {
    nullable: true,
  })
  individual?: IndividualWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => PaymentSourceUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentSourceUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentSourceUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  paymentSources?: PaymentSourceUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @IsOptional()
  @Field(() => SellerWhereUniqueInput, {
    nullable: true,
  })
  seller?: SellerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
