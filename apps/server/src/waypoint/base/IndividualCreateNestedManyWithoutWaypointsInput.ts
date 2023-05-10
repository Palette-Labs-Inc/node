
import { InputType, Field } from "@nestjs/graphql";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IndividualCreateNestedManyWithoutWaypointsInput {
  @Field(() => [IndividualWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndividualWhereUniqueInput],
  })
  connect?: Array<IndividualWhereUniqueInput>;
}

export { IndividualCreateNestedManyWithoutWaypointsInput as IndividualCreateNestedManyWithoutWaypointsInput };
