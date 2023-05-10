
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumBazaarFulfillmentModes } from "./EnumBazaarFulfillmentModes";
import { IsEnum, IsOptional, ValidateNested, IsInt } from "class-validator";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { Type } from "class-transformer";
import { PromotionUpdateManyWithoutBazaarsInput } from "./PromotionUpdateManyWithoutBazaarsInput";
import { SellerUpdateManyWithoutBazaarsInput } from "./SellerUpdateManyWithoutBazaarsInput";

@InputType()
class BazaarUpdateInput {
  @ApiProperty({
    required: false,
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
    type: () => PromotionUpdateManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => PromotionUpdateManyWithoutBazaarsInput, {
    nullable: true,
  })
  promotions?: PromotionUpdateManyWithoutBazaarsInput;

  @ApiProperty({
    required: false,
    type: () => SellerUpdateManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => SellerUpdateManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => SellerUpdateManyWithoutBazaarsInput, {
    nullable: true,
  })
  sellers?: SellerUpdateManyWithoutBazaarsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeToLive?: number;
}

export { BazaarUpdateInput as BazaarUpdateInput };
