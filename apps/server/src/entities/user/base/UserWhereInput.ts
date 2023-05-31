
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecificationListRelationFilter } from "../../fulfillmentSpecification/base/FulfillmentSpecificationListRelationFilter";
import { StringFilter } from "../../../util/StringFilter";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { PaymentSourceListRelationFilter } from "../../paymentSource/base/PaymentSourceListRelationFilter";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class UserWhereInput {
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
  courier?: CourierWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationListRelationFilter)
  @IsOptional()
  @Field(() => FulfillmentSpecificationListRelationFilter, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationListRelationFilter;

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
    type: () => IndividualWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereUniqueInput)
  @IsOptional()
  @Field(() => IndividualWhereUniqueInput, {
    nullable: true,
  })
  individual?: IndividualWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentSourceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentSourceListRelationFilter)
  @IsOptional()
  @Field(() => PaymentSourceListRelationFilter, {
    nullable: true,
  })
  paymentSources?: PaymentSourceListRelationFilter;

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

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
