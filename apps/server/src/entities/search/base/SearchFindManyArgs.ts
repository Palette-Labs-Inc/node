
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SearchWhereInput } from "./SearchWhereInput";
import { Type } from "class-transformer";
import { SearchOrderByInput } from "./SearchOrderByInput";

@ArgsType()
class SearchFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SearchWhereInput,
  })
  @Field(() => SearchWhereInput, { nullable: true })
  @Type(() => SearchWhereInput)
  where?: SearchWhereInput;

  @ApiProperty({
    required: false,
    type: [SearchOrderByInput],
  })
  @Field(() => [SearchOrderByInput], { nullable: true })
  @Type(() => SearchOrderByInput)
  orderBy?: Array<SearchOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SearchFindManyArgs as SearchFindManyArgs };
