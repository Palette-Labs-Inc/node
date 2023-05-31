
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsInt,
  IsNumber,
} from "class-validator";
import { MenuItemUpdateManyWithoutQuotesInput } from "./MenuItemUpdateManyWithoutQuotesInput";
import { Type } from "class-transformer";

@InputType()
class QuoteUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currencyCode?: string;

  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutQuotesInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutQuotesInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutQuotesInput, {
    nullable: true,
  })
  menuItems?: MenuItemUpdateManyWithoutQuotesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeToLive?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number;
}

export { QuoteUpdateInput as QuoteUpdateInput };
