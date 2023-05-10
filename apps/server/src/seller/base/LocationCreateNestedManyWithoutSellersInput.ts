
import { InputType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocationCreateNestedManyWithoutSellersInput {
  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  connect?: Array<LocationWhereUniqueInput>;
}

export { LocationCreateNestedManyWithoutSellersInput as LocationCreateNestedManyWithoutSellersInput };
