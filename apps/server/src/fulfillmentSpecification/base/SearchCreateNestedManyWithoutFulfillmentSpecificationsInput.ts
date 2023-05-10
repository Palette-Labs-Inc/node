
import { InputType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SearchCreateNestedManyWithoutFulfillmentSpecificationsInput {
  @Field(() => [SearchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SearchWhereUniqueInput],
  })
  connect?: Array<SearchWhereUniqueInput>;
}

export { SearchCreateNestedManyWithoutFulfillmentSpecificationsInput as SearchCreateNestedManyWithoutFulfillmentSpecificationsInput };
