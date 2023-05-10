
import { InputType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocationCreateNestedManyWithoutPromotionsInput {
  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  connect?: Array<LocationWhereUniqueInput>;
}

export { LocationCreateNestedManyWithoutPromotionsInput as LocationCreateNestedManyWithoutPromotionsInput };
