
import { InputType, Field } from "@nestjs/graphql";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CourierCreateNestedManyWithoutOrganizationsInput {
  @Field(() => [CourierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierWhereUniqueInput],
  })
  connect?: Array<CourierWhereUniqueInput>;
}

export { CourierCreateNestedManyWithoutOrganizationsInput as CourierCreateNestedManyWithoutOrganizationsInput };
