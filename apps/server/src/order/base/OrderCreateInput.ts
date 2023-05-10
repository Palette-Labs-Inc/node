
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CancellationWhereUniqueInput } from "../../cancellation/base/CancellationWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { MenuItemCreateNestedManyWithoutOrdersInput } from "./MenuItemCreateNestedManyWithoutOrdersInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionCreateNestedManyWithoutOrdersInput } from "./PromotionCreateNestedManyWithoutOrdersInput";
import { EnumOrderStatus } from "./EnumOrderStatus";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: true,
    type: () => BillingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BillingWhereUniqueInput)
  @Field(() => BillingWhereUniqueInput)
  billing!: BillingWhereUniqueInput;

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
    required: true,
    type: () => FulfillmentSpecificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationWhereUniqueInput)
  @Field(() => FulfillmentSpecificationWhereUniqueInput)
  fulfillmentSpecification!: FulfillmentSpecificationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MenuItemCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  menuItems?: MenuItemCreateNestedManyWithoutOrdersInput;

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
    type: () => PromotionCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => PromotionCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  promotion?: PromotionCreateNestedManyWithoutOrdersInput;

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
    required: true,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @Field(() => EnumOrderStatus)
  status!: "Active" | "Complete" | "Cancelled";
}

export { OrderCreateInput as OrderCreateInput };
