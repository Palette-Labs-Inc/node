
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsInt,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumHourIntervalDays } from "./EnumHourIntervalDays";
import { Menu } from "../../menu/base/Menu";

@ObjectType()
class HourInterval {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumHourIntervalDays,
    isArray: true,
  })
  @IsEnum(EnumHourIntervalDays, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumHourIntervalDays], {
    nullable: true,
  })
  days?: Array<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
  >;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  fromHour!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  fromMinute!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Menu,
  })
  @ValidateNested()
  @Type(() => Menu)
  @IsOptional()
  menus?: Menu | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  toHour!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  toMinute!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { HourInterval as HourInterval };
