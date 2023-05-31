
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumPaymentTermCollectedBy } from "./EnumPaymentTermCollectedBy";
import { StringFilter } from "../../util/StringFilter";
import { EnumPaymentTermLifecycleProcessing } from "./EnumPaymentTermLifecycleProcessing";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { EnumPaymentTermStatus } from "./EnumPaymentTermStatus";

@InputType()
class PaymentTermWhereInput {
  @ApiProperty({
    required: false,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @IsOptional()
  @Field(() => BazaarWhereUniqueInput, {
    nullable: true,
  })
  bazaar?: BazaarWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumPaymentTermCollectedBy,
  })
  @IsEnum(EnumPaymentTermCollectedBy)
  @IsOptional()
  @Field(() => EnumPaymentTermCollectedBy, {
    nullable: true,
  })
  collectedBy?: "SSN" | "BSN" | "CSN";

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
    enum: EnumPaymentTermLifecycleProcessing,
  })
  @IsEnum(EnumPaymentTermLifecycleProcessing)
  @IsOptional()
  @Field(() => EnumPaymentTermLifecycleProcessing, {
    nullable: true,
  })
  lifecycleProcessing?:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  paymentAmount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SearchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SearchWhereUniqueInput)
  @IsOptional()
  @Field(() => SearchWhereUniqueInput, {
    nullable: true,
  })
  search?: SearchWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumPaymentTermStatus,
  })
  @IsEnum(EnumPaymentTermStatus)
  @IsOptional()
  @Field(() => EnumPaymentTermStatus, {
    nullable: true,
  })
  status?: "Processed" | "Collectable";
}

export { PaymentTermWhereInput as PaymentTermWhereInput };
