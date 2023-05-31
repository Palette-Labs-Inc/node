
import { InputType, Field } from "@nestjs/graphql";
import { PaymentSourceWhereUniqueInput } from "../../paymentSource/base/PaymentSourceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentSourceUpdateManyWithoutUsersInput {
  @Field(() => [PaymentSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentSourceWhereUniqueInput],
  })
  connect?: Array<PaymentSourceWhereUniqueInput>;

  @Field(() => [PaymentSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentSourceWhereUniqueInput],
  })
  disconnect?: Array<PaymentSourceWhereUniqueInput>;

  @Field(() => [PaymentSourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentSourceWhereUniqueInput],
  })
  set?: Array<PaymentSourceWhereUniqueInput>;
}

export { PaymentSourceUpdateManyWithoutUsersInput as PaymentSourceUpdateManyWithoutUsersInput };
