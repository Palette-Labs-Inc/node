
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionUpdateManyWithoutSearchesInput } from "./PromotionUpdateManyWithoutSearchesInput";
import { SellerUpdateManyWithoutSearchesInput } from "./SellerUpdateManyWithoutSearchesInput";

@InputType()
class SearchUpdateInput {
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
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput | null;

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
  menuItems?: MenuItemWhereUniqueInput | null;

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
  paymentTerm?: PaymentTermWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PromotionUpdateManyWithoutSearchesInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateManyWithoutSearchesInput)
  @IsOptional()
  @Field(() => PromotionUpdateManyWithoutSearchesInput, {
    nullable: true,
  })
  promotions?: PromotionUpdateManyWithoutSearchesInput;

  @ApiProperty({
    required: false,
    type: () => SellerUpdateManyWithoutSearchesInput,
  })
  @ValidateNested()
  @Type(() => SellerUpdateManyWithoutSearchesInput)
  @IsOptional()
  @Field(() => SellerUpdateManyWithoutSearchesInput, {
    nullable: true,
  })
  sellers?: SellerUpdateManyWithoutSearchesInput;
}

export { SearchUpdateInput as SearchUpdateInput };
