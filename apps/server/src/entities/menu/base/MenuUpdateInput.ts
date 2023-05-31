
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "@app/custom-validators";
import { IsOptional, IsEnum, ValidateNested, IsString } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumMenuFulfillmentModes } from "./EnumMenuFulfillmentModes";
import { HourIntervalUpdateManyWithoutMenusInput } from "./HourIntervalUpdateManyWithoutMenusInput";
import { Type } from "class-transformer";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class MenuUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  categoryIDs?: InputJsonValue;

  @ApiProperty({
    required: false,
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
    required: false,
    type: () => HourIntervalUpdateManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => HourIntervalUpdateManyWithoutMenusInput)
  @IsOptional()
  @Field(() => HourIntervalUpdateManyWithoutMenusInput, {
    nullable: true,
  })
  hourIntervals?: HourIntervalUpdateManyWithoutMenusInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

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
  seller?: SellerWhereUniqueInput;
}

export { MenuUpdateInput as MenuUpdateInput };
