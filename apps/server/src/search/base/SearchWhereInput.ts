
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionListRelationFilter } from "../../promotion/base/PromotionListRelationFilter";
import { SellerListRelationFilter } from "../../seller/base/SellerListRelationFilter";

@InputType()
class SearchWhereInput {
  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationWhereUniqueInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationWhereUniqueInput, {
    nullable: true,
  })
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemWhereUniqueInput, {
    nullable: true,
  })
  menuItems?: MenuItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentTermWhereUniqueInput, {
    nullable: true,
  })
  paymentTerm?: PaymentTermWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PromotionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PromotionListRelationFilter)
  @IsOptional()
  @Field(() => PromotionListRelationFilter, {
    nullable: true,
  })
  promotions?: PromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SellerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SellerListRelationFilter)
  @IsOptional()
  @Field(() => SellerListRelationFilter, {
    nullable: true,
  })
  sellers?: SellerListRelationFilter;
}

export { SearchWhereInput as SearchWhereInput };
