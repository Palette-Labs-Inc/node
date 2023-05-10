
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Bazaar } from "../../bazaar/base/Bazaar";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { Category } from "../../category/base/Category";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Location } from "../../location/base/Location";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Menu } from "../../menu/base/Menu";
import { ModifierGroup } from "../../modifierGroup/base/ModifierGroup";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Promotion } from "../../promotion/base/Promotion";
import { Rating } from "../../rating/base/Rating";
import { Search } from "../../search/base/Search";
import { User } from "../../user/base/User";

@ObjectType()
class Seller {
  @ApiProperty({
    required: false,
    type: () => [Bazaar],
  })
  @ValidateNested()
  @Type(() => Bazaar)
  @IsOptional()
  bazaar?: Array<Bazaar>;

  @ApiProperty({
    required: true,
    type: () => [Category],
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  categories?: Array<Category>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [FulfillmentSpecification],
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecification)
  @IsOptional()
  fulfillmentSpecifications?: Array<FulfillmentSpecification>;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  holidays!: JsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRateable!: boolean;

  @ApiProperty({
    required: false,
    type: () => [Location],
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  locations?: Array<Location>;

  @ApiProperty({
    required: true,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: Array<MenuItem>;

  @ApiProperty({
    required: true,
    type: () => [Menu],
  })
  @ValidateNested()
  @Type(() => Menu)
  @IsOptional()
  menus?: Array<Menu>;

  @ApiProperty({
    required: true,
    type: () => [ModifierGroup],
  })
  @ValidateNested()
  @Type(() => ModifierGroup)
  @IsOptional()
  modifierGroups?: Array<ModifierGroup>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password!: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentTerm,
  })
  @ValidateNested()
  @Type(() => PaymentTerm)
  @IsOptional()
  paymentTerm?: PaymentTerm | null;

  @ApiProperty({
    required: false,
    type: () => [Promotion],
  })
  @ValidateNested()
  @Type(() => Promotion)
  @IsOptional()
  promotions?: Array<Promotion>;

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
    type: () => [Rating],
  })
  @ValidateNested()
  @Type(() => Rating)
  @IsOptional()
  ratings?: Array<Rating>;

  @ApiProperty({
    required: false,
    type: () => Search,
  })
  @ValidateNested()
  @Type(() => Search)
  @IsOptional()
  search?: Search | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sellerClassificationId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  users?: User;
}

export { Seller as Seller };
