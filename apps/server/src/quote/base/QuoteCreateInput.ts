
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
  IsNumber,
} from "class-validator";
import { MenuItemCreateNestedManyWithoutQuotesInput } from "./MenuItemCreateNestedManyWithoutQuotesInput";
import { Type } from "class-transformer";

@InputType()
class QuoteCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currencyCode!: string;

  @ApiProperty({
    required: true,
    type: () => MenuItemCreateNestedManyWithoutQuotesInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutQuotesInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutQuotesInput, {
    nullable: true,
  })
  menuItems?: MenuItemCreateNestedManyWithoutQuotesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  timeToLive!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  totalPrice!: number;
}

export { QuoteCreateInput as QuoteCreateInput };
