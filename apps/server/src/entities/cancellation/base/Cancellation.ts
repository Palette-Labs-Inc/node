
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";
import {
  IsEnum,
  IsDate,
  IsString,
  IsBoolean,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";

@ObjectType()
class Cancellation {
  @ApiProperty({
    required: true,
    enum: EnumCancellationCancelledBy,
  })
  @IsEnum(EnumCancellationCancelledBy)
  @Field(() => EnumCancellationCancelledBy, {
    nullable: true,
  })
  cancelledBy?: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isReasonRequired!: boolean;

  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  order?: Order | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  reason!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Cancellation as Cancellation };
