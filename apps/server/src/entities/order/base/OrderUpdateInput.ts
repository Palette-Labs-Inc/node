
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CancellationWhereUniqueInput } from "../../cancellation/base/CancellationWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { MenuItemUpdateManyWithoutOrdersInput } from "./MenuItemUpdateManyWithoutOrdersInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionUpdateManyWithoutOrdersInput } from "./PromotionUpdateManyWithoutOrdersInput";
import { EnumOrderStatus } from "./EnumOrderStatus";

@InputType()
class OrderUpdateInput {
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
  cancellation?: CancellationWhereUniqueInput | null;

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
    type: () => MenuItemUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  menuItems?: MenuItemUpdateManyWithoutOrdersInput;

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
    type: () => PromotionUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => PromotionUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  promotion?: PromotionUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  referenceOrderIds?: string | null;

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

export { OrderUpdateInput as OrderUpdateInput };
