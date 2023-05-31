
import { InputType, Field } from "@nestjs/graphql";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuoteCreateNestedManyWithoutMenuItemsInput {
  @Field(() => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuoteWhereUniqueInput],
  })
  connect?: Array<QuoteWhereUniqueInput>;
}

export { QuoteCreateNestedManyWithoutMenuItemsInput as QuoteCreateNestedManyWithoutMenuItemsInput };
