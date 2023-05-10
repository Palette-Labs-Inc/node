
import { InputType, Field } from "@nestjs/graphql";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IndividualUpdateManyWithoutContactsInput {
  @Field(() => [IndividualWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndividualWhereUniqueInput],
  })
  connect?: Array<IndividualWhereUniqueInput>;

  @Field(() => [IndividualWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndividualWhereUniqueInput],
  })
  disconnect?: Array<IndividualWhereUniqueInput>;

  @Field(() => [IndividualWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndividualWhereUniqueInput],
  })
  set?: Array<IndividualWhereUniqueInput>;
}

export { IndividualUpdateManyWithoutContactsInput as IndividualUpdateManyWithoutContactsInput };
