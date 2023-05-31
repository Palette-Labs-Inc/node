
import { InputType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocationUpdateManyWithoutOrganizationsInput {
  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  connect?: Array<LocationWhereUniqueInput>;

  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  disconnect?: Array<LocationWhereUniqueInput>;

  @Field(() => [LocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocationWhereUniqueInput],
  })
  set?: Array<LocationWhereUniqueInput>;
}

export { LocationUpdateManyWithoutOrganizationsInput as LocationUpdateManyWithoutOrganizationsInput };
