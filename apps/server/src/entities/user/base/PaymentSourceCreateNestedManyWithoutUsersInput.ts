
import { InputType, Field } from "@nestjs/graphql";
import { PaymentSourceWhereUniqueInput } from "../../paymentSource/base/PaymentSourceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentSourceCreateNestedManyWithoutUsersInput {
  @Field(() => [PaymentSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentSourceWhereUniqueInput],
  })
  connect?: Array<PaymentSourceWhereUniqueInput>;
}

export { PaymentSourceCreateNestedManyWithoutUsersInput as PaymentSourceCreateNestedManyWithoutUsersInput };
