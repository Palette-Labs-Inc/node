
import { InputType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentTermCreateNestedManyWithoutPaymentSourcesInput {
  @Field(() => [PaymentTermWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTermWhereUniqueInput],
  })
  connect?: Array<PaymentTermWhereUniqueInput>;
}

export { PaymentTermCreateNestedManyWithoutPaymentSourcesInput as PaymentTermCreateNestedManyWithoutPaymentSourcesInput };
