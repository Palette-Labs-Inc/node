import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Condition } from "../../../condition/base/Condition";
import { Search } from "../../../search/base/Search";

@ObjectType()
class BroadcastDto {
  @ApiProperty({
    required: true,
    type: () => Condition,
  })
  @ValidateNested()
  @Type(() => Condition)
  condition!: Condition;

  @ApiProperty({
    required: true,
    type: () => Search,
  })
  @ValidateNested()
  @Type(() => Search)
  search!: Search;
}

export { BroadcastDto as BroadcastDto };