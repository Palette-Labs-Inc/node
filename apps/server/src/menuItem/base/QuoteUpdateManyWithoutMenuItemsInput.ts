
import { InputType, Field } from "@nestjs/graphql";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuoteUpdateManyWithoutMenuItemsInput {
  @Field(() => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuoteWhereUniqueInput],
  })
  connect?: Array<QuoteWhereUniqueInput>;

  @Field(() => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuoteWhereUniqueInput],
  })
  disconnect?: Array<QuoteWhereUniqueInput>;

  @Field(() => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuoteWhereUniqueInput],
  })
  set?: Array<QuoteWhereUniqueInput>;
}

export { QuoteUpdateManyWithoutMenuItemsInput as QuoteUpdateManyWithoutMenuItemsInput };
