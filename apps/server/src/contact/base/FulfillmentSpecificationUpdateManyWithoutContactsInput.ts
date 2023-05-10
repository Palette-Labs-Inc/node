
import { InputType, Field } from "@nestjs/graphql";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FulfillmentSpecificationUpdateManyWithoutContactsInput {
  @Field(() => [FulfillmentSpecificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FulfillmentSpecificationWhereUniqueInput],
  })
  connect?: Array<FulfillmentSpecificationWhereUniqueInput>;

  @Field(() => [FulfillmentSpecificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FulfillmentSpecificationWhereUniqueInput],
  })
  disconnect?: Array<FulfillmentSpecificationWhereUniqueInput>;

  @Field(() => [FulfillmentSpecificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FulfillmentSpecificationWhereUniqueInput],
  })
  set?: Array<FulfillmentSpecificationWhereUniqueInput>;
}

export { FulfillmentSpecificationUpdateManyWithoutContactsInput as FulfillmentSpecificationUpdateManyWithoutContactsInput };
