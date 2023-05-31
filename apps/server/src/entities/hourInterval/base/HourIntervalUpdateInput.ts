
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumHourIntervalDays } from "./EnumHourIntervalDays";
import { IsEnum, IsOptional, IsInt, ValidateNested } from "class-validator";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class HourIntervalUpdateInput {
  @ApiProperty({
    required: false,
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
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fromHour?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fromMinute?: number;

  @ApiProperty({
    required: false,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuWhereUniqueInput, {
    nullable: true,
  })
  menus?: MenuWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  toHour?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  toMinute?: number;
}

export { HourIntervalUpdateInput as HourIntervalUpdateInput };
