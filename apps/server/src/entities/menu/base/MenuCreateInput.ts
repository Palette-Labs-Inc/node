
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumMenuFulfillmentModes } from "./EnumMenuFulfillmentModes";
import { IsEnum, IsOptional, ValidateNested, IsString } from "class-validator";
import { HourIntervalCreateNestedManyWithoutMenusInput } from "./HourIntervalCreateNestedManyWithoutMenusInput";
import { Type } from "class-transformer";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class MenuCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  categoryIDs!: InputJsonValue;

  @ApiProperty({
    required: true,
    enum: EnumMenuFulfillmentModes,
    isArray: true,
  })
  @IsEnum(EnumMenuFulfillmentModes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumMenuFulfillmentModes], {
    nullable: true,
  })
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;

  @ApiProperty({
    required: true,
    type: () => HourIntervalCreateNestedManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => HourIntervalCreateNestedManyWithoutMenusInput)
  @IsOptional()
  @Field(() => HourIntervalCreateNestedManyWithoutMenusInput, {
    nullable: true,
  })
  hourIntervals?: HourIntervalCreateNestedManyWithoutMenusInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @Field(() => SellerWhereUniqueInput)
  seller!: SellerWhereUniqueInput;
}

export { MenuCreateInput as MenuCreateInput };
