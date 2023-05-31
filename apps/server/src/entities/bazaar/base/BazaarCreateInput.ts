
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumBazaarFulfillmentModes } from "./EnumBazaarFulfillmentModes";
import { IsEnum, IsOptional, ValidateNested, IsInt } from "class-validator";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { Type } from "class-transformer";
import { PromotionCreateNestedManyWithoutBazaarsInput } from "./PromotionCreateNestedManyWithoutBazaarsInput";
import { SellerCreateNestedManyWithoutBazaarsInput } from "./SellerCreateNestedManyWithoutBazaarsInput";

@InputType()
class BazaarCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumBazaarFulfillmentModes,
    isArray: true,
  })
  @IsEnum(EnumBazaarFulfillmentModes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumBazaarFulfillmentModes], {
    nullable: true,
  })
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;

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
  paymentTerms?: PaymentTermWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PromotionCreateNestedManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateNestedManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => PromotionCreateNestedManyWithoutBazaarsInput, {
    nullable: true,
  })
  promotions?: PromotionCreateNestedManyWithoutBazaarsInput;

  @ApiProperty({
    required: true,
    type: () => SellerCreateNestedManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => SellerCreateNestedManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => SellerCreateNestedManyWithoutBazaarsInput, {
    nullable: true,
  })
  sellers?: SellerCreateNestedManyWithoutBazaarsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  timeToLive!: number;
}

export { BazaarCreateInput as BazaarCreateInput };
