
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumHourIntervalDays } from "./EnumHourIntervalDays";
import { IsEnum, IsOptional, IsInt, ValidateNested } from "class-validator";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class HourIntervalCreateInput {
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
}

export { HourIntervalCreateInput as HourIntervalCreateInput };
