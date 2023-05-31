
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@InputType()
class CancellationWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumCancellationCancelledBy,
  })
  @IsEnum(EnumCancellationCancelledBy)
  @IsOptional()
  @Field(() => EnumCancellationCancelledBy, {
    nullable: true,
  })
  cancelledBy?: "Seller" | "Buyer" | "Courier";

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
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isReasonRequired?: BooleanFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  reason?: StringFilter;
}

export { CancellationWhereInput as CancellationWhereInput };
