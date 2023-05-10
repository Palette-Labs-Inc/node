
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ItemQuantityWhereInput } from "./ItemQuantityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ItemQuantityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ItemQuantityWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityWhereInput)
  @IsOptional()
  @Field(() => ItemQuantityWhereInput, {
    nullable: true,
  })
  every?: ItemQuantityWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityWhereInput)
  @IsOptional()
  @Field(() => ItemQuantityWhereInput, {
    nullable: true,
  })
  some?: ItemQuantityWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityWhereInput)
  @IsOptional()
  @Field(() => ItemQuantityWhereInput, {
    nullable: true,
  })
  none?: ItemQuantityWhereInput;
}
export { ItemQuantityListRelationFilter as ItemQuantityListRelationFilter };
