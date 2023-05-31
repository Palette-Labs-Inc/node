import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Search } from "../../../search/base/Search";
import { RequestTransactionLifecycleDto } from "../../dto/request.dto"

@ObjectType()
class BroadcastDto extends RequestTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Search,
  })
  @ValidateNested()
  @Type(() => Search)
  @Field(() => Search)
  search!: Search;
}

export { BroadcastDto as BroadcastDto };