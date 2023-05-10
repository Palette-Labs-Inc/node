
import { ArgsType, Field } from "@nestjs/graphql";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";

@ArgsType()
class DeleteCourierArgs {
  @Field(() => CourierWhereUniqueInput, { nullable: false })
  where!: CourierWhereUniqueInput;
}

export { DeleteCourierArgs as DeleteCourierArgs };
