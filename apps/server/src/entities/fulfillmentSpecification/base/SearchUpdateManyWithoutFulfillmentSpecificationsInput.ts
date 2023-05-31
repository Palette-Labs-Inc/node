
import { InputType, Field } from "@nestjs/graphql";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SearchUpdateManyWithoutFulfillmentSpecificationsInput {
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

export { SearchUpdateManyWithoutFulfillmentSpecificationsInput as SearchUpdateManyWithoutFulfillmentSpecificationsInput };
