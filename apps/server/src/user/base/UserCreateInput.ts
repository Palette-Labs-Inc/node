
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecificationCreateNestedManyWithoutUsersInput } from "./FulfillmentSpecificationCreateNestedManyWithoutUsersInput";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { PaymentSourceCreateNestedManyWithoutUsersInput } from "./PaymentSourceCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class UserCreateInput {
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
    type: () => FulfillmentSpecificationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutUsersInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PaymentSourceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentSourceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentSourceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  paymentSources?: PaymentSourceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
