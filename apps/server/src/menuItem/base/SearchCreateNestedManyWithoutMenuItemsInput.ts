
import { InputType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SearchCreateNestedManyWithoutMenuItemsInput {
  @Field(() => [SearchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SearchWhereUniqueInput],
  })
  connect?: Array<SearchWhereUniqueInput>;
}

export { SearchCreateNestedManyWithoutMenuItemsInput as SearchCreateNestedManyWithoutMenuItemsInput };
