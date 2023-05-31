
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";
import {
  IsEnum,
  IsBoolean,
  ValidateNested,
  IsOptional,
  IsString,
} from "class-validator";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CancellationCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumCancellationCancelledBy,
  })
  @IsEnum(EnumCancellationCancelledBy)
  @Field(() => EnumCancellationCancelledBy)
  cancelledBy!: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isReasonRequired!: boolean;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  reason!: string;
}

export { CancellationCreateInput as CancellationCreateInput };
