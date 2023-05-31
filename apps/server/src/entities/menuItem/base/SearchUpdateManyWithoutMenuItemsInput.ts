
import { InputType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SearchUpdateManyWithoutMenuItemsInput {
  @Field(() => [SearchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SearchWhereUniqueInput],
  })
  connect?: Array<SearchWhereUniqueInput>;

  @Field(() => [SearchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SearchWhereUniqueInput],
  })
  disconnect?: Array<SearchWhereUniqueInput>;

  @Field(() => [SearchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SearchWhereUniqueInput],
  })
  set?: Array<SearchWhereUniqueInput>;
}

export { SearchUpdateManyWithoutMenuItemsInput as SearchUpdateManyWithoutMenuItemsInput };
