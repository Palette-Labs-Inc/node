
import { InputType, Field } from "@nestjs/graphql";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IndividualCreateNestedManyWithoutContactsInput {
  @Field(() => [IndividualWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndividualWhereUniqueInput],
  })
  connect?: Array<IndividualWhereUniqueInput>;
}

export { IndividualCreateNestedManyWithoutContactsInput as IndividualCreateNestedManyWithoutContactsInput };
