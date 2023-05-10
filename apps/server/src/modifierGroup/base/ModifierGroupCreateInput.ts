
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsOptional } from "class-validator";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ModifierGroupCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maximumPerModifierSelectionQuantity!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maximumSelections!: number;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  menuItemIDs!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minimumSelections!: number;

  @ApiProperty({
    required: false,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @IsOptional()
  @Field(() => SellerWhereUniqueInput, {
    nullable: true,
  })
  sellerModifierGroups?: SellerWhereUniqueInput | null;
}

export { ModifierGroupCreateInput as ModifierGroupCreateInput };
