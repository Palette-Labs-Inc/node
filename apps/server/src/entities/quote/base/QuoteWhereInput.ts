
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

@InputType()
class QuoteWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  currencyCode?: StringFilter;

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
    type: () => MenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemListRelationFilter, {
    nullable: true,
  })
  menuItems?: MenuItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  timeToLive?: IntFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  totalPrice?: FloatFilter;
}

export { QuoteWhereInput as QuoteWhereInput };
