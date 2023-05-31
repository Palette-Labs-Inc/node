
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PromotionListRelationFilter } from "../../promotion/base/PromotionListRelationFilter";
import { SellerListRelationFilter } from "../../seller/base/SellerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

@InputType()
class BazaarWhereInput {
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
    type: () => PromotionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PromotionListRelationFilter)
  @IsOptional()
  @Field(() => PromotionListRelationFilter, {
    nullable: true,
  })
  promotions?: PromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SellerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SellerListRelationFilter)
  @IsOptional()
  @Field(() => SellerListRelationFilter, {
    nullable: true,
  })
  sellers?: SellerListRelationFilter;

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
}

export { BazaarWhereInput as BazaarWhereInput };
