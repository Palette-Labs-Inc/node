
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CancellationWhereUniqueInput } from "../../cancellation/base/CancellationWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionListRelationFilter } from "../../promotion/base/PromotionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumOrderStatus } from "./EnumOrderStatus";

@InputType()
class OrderWhereInput {
  @ApiProperty({
    required: false,
    type: () => BillingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BillingWhereUniqueInput)
  @IsOptional()
  @Field(() => BillingWhereUniqueInput, {
    nullable: true,
  })
  billing?: BillingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CancellationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CancellationWhereUniqueInput)
  @IsOptional()
  @Field(() => CancellationWhereUniqueInput, {
    nullable: true,
  })
  cancellation?: CancellationWhereUniqueInput;

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
    type: () => MenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemListRelationFilter, {
    nullable: true,
  })
  menuItems?: MenuItemListRelationFilter;

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
  promotion?: PromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  referenceOrderIds?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Active" | "Complete" | "Cancelled";
}

export { OrderWhereInput as OrderWhereInput };
