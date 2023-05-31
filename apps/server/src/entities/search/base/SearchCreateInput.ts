
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionCreateNestedManyWithoutSearchesInput } from "./PromotionCreateNestedManyWithoutSearchesInput";
import { SellerCreateNestedManyWithoutSearchesInput } from "./SellerCreateNestedManyWithoutSearchesInput";

@InputType()
class SearchCreateInput {
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
    type: () => PromotionCreateNestedManyWithoutSearchesInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateNestedManyWithoutSearchesInput)
  @IsOptional()
  @Field(() => PromotionCreateNestedManyWithoutSearchesInput, {
    nullable: true,
  })
  promotions?: PromotionCreateNestedManyWithoutSearchesInput;

  @ApiProperty({
    required: false,
    type: () => SellerCreateNestedManyWithoutSearchesInput,
  })
  @ValidateNested()
  @Type(() => SellerCreateNestedManyWithoutSearchesInput)
  @IsOptional()
  @Field(() => SellerCreateNestedManyWithoutSearchesInput, {
    nullable: true,
  })
  sellers?: SellerCreateNestedManyWithoutSearchesInput;
}

export { SearchCreateInput as SearchCreateInput };
