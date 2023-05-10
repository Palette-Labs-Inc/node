
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumMenuItemFulfillmentModes } from "./EnumMenuItemFulfillmentModes";
import { Image } from "../../image/base/Image";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { Order } from "../../order/base/Order";
import { Organization } from "../../organization/base/Organization";
import { ItemQuantity } from "../../itemQuantity/base/ItemQuantity";
import { Quote } from "../../quote/base/Quote";
import { Search } from "../../search/base/Search";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class MenuItem {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currencyCode!: string;

  @ApiProperty({
    required: true,
    enum: EnumMenuItemFulfillmentModes,
    isArray: true,
  })
  @IsEnum(EnumMenuItemFulfillmentModes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumMenuItemFulfillmentModes], {
    nullable: true,
  })
  fulfillmentModes?: Array<
    "Delivery" | "PickUp" | "DineIn" | "TakeOut" | "DriveThru"
  >;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  images?: Array<Image>;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRateable!: boolean;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  locationIDs!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [MediaFile],
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  mediaFile?: Array<MediaFile>;

  @ApiProperty({
    required: false,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItemsSelectedModifiers?: Array<MenuItem>;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  modifierGroupIDs!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Array<Order>;

  @ApiProperty({
    required: true,
    type: () => [Organization],
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Array<Organization>;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  paymentModes!: JsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: () => ItemQuantity,
  })
  @ValidateNested()
  @Type(() => ItemQuantity)
  @IsOptional()
  quantity?: ItemQuantity | null;

  @ApiProperty({
    required: false,
    type: () => [Quote],
  })
  @ValidateNested()
  @Type(() => Quote)
  @IsOptional()
  quotes?: Array<Quote>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Search],
  })
  @ValidateNested()
  @Type(() => Search)
  @IsOptional()
  searches?: Array<Search>;

  @ApiProperty({
    required: false,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  selectedModifiers?: Array<MenuItem>;

  @ApiProperty({
    required: false,
    type: () => Seller,
  })
  @ValidateNested()
  @Type(() => Seller)
  @IsOptional()
  sellers?: Seller | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  timeToLive!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MenuItem as MenuItem };
