
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsBoolean,
  IsNumber,
  IsDate,
} from "class-validator";
import { EnumMenuItemFulfillmentModes } from "./EnumMenuItemFulfillmentModes";
import { ImageUpdateManyWithoutMenuItemsInput } from "./ImageUpdateManyWithoutMenuItemsInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { MediaFileUpdateManyWithoutMenuItemsInput } from "./MediaFileUpdateManyWithoutMenuItemsInput";
import { MenuItemUpdateManyWithoutMenuItemsInput } from "./MenuItemUpdateManyWithoutMenuItemsInput";
import { OrderUpdateManyWithoutMenuItemsInput } from "./OrderUpdateManyWithoutMenuItemsInput";
import { OrganizationUpdateManyWithoutMenuItemsInput } from "./OrganizationUpdateManyWithoutMenuItemsInput";
import { ItemQuantityWhereUniqueInput } from "../../itemQuantity/base/ItemQuantityWhereUniqueInput";
import { QuoteUpdateManyWithoutMenuItemsInput } from "./QuoteUpdateManyWithoutMenuItemsInput";
import { SearchUpdateManyWithoutMenuItemsInput } from "./SearchUpdateManyWithoutMenuItemsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class MenuItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currencyCode?: string;

  @ApiProperty({
    required: false,
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
    type: () => ImageUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRateable?: boolean;

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
    type: () => MediaFileUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MediaFileUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MediaFileUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  mediaFile?: MediaFileUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemsSelectedModifiers?: MenuItemUpdateManyWithoutMenuItemsInput;

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
    type: () => OrderUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrganizationUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  organization?: OrganizationUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  paymentModes?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

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
    type: () => QuoteUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => QuoteUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => QuoteUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  quotes?: QuoteUpdateManyWithoutMenuItemsInput;

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
    type: () => SearchUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => SearchUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => SearchUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  searches?: SearchUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  selectedModifiers?: MenuItemUpdateManyWithoutMenuItemsInput;

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
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timeToLive?: Date;
}

export { MenuItemUpdateInput as MenuItemUpdateInput };
