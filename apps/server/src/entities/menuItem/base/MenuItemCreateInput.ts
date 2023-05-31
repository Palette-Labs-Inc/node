
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsNumber,
  IsDate,
} from "class-validator";
import { EnumMenuItemFulfillmentModes } from "./EnumMenuItemFulfillmentModes";
import { ImageCreateNestedManyWithoutMenuItemsInput } from "./ImageCreateNestedManyWithoutMenuItemsInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { MediaFileCreateNestedManyWithoutMenuItemsInput } from "./MediaFileCreateNestedManyWithoutMenuItemsInput";
import { MenuItemCreateNestedManyWithoutMenuItemsInput } from "./MenuItemCreateNestedManyWithoutMenuItemsInput";
import { OrderCreateNestedManyWithoutMenuItemsInput } from "./OrderCreateNestedManyWithoutMenuItemsInput";
import { OrganizationCreateNestedManyWithoutMenuItemsInput } from "./OrganizationCreateNestedManyWithoutMenuItemsInput";
import { ItemQuantityWhereUniqueInput } from "../../itemQuantity/base/ItemQuantityWhereUniqueInput";
import { QuoteCreateNestedManyWithoutMenuItemsInput } from "./QuoteCreateNestedManyWithoutMenuItemsInput";
import { SearchCreateNestedManyWithoutMenuItemsInput } from "./SearchCreateNestedManyWithoutMenuItemsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class MenuItemCreateInput {
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
    required: false,
    type: () => ImageCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutMenuItemsInput;

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
  locationIDs?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => MediaFileCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MediaFileCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MediaFileCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  mediaFile?: MediaFileCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemsSelectedModifiers?: MenuItemCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  modifierGroupIDs?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrganizationCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrganizationCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  organization?: OrganizationCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  paymentModes!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemQuantityWhereUniqueInput, {
    nullable: true,
  })
  quantity?: ItemQuantityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuoteCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => QuoteCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => QuoteCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  quotes?: QuoteCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;

  @ApiProperty({
    required: false,
    type: () => SearchCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => SearchCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => SearchCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  searches?: SearchCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  selectedModifiers?: MenuItemCreateNestedManyWithoutMenuItemsInput;

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
  sellers?: SellerWhereUniqueInput | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  timeToLive!: Date;
}

export { MenuItemCreateInput as MenuItemCreateInput };
