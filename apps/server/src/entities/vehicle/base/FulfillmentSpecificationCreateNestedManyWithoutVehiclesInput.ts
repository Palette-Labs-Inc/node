
import { InputType, Field } from "@nestjs/graphql";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FulfillmentSpecificationCreateNestedManyWithoutVehiclesInput {
  @Field(() => [FulfillmentSpecificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FulfillmentSpecificationWhereUniqueInput],
  })
  connect?: Array<FulfillmentSpecificationWhereUniqueInput>;
}

export { FulfillmentSpecificationCreateNestedManyWithoutVehiclesInput as FulfillmentSpecificationCreateNestedManyWithoutVehiclesInput };
