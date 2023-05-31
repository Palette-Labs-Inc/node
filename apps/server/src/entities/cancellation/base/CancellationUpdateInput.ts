
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";
import {
  IsEnum,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsString,
} from "class-validator";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CancellationUpdateInput {
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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isReasonRequired?: boolean;

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
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reason?: string;
}

export { CancellationUpdateInput as CancellationUpdateInput };
