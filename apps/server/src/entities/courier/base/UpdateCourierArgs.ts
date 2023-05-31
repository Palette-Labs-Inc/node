
import { ArgsType, Field } from "@nestjs/graphql";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";
import { CourierUpdateInput } from "./CourierUpdateInput";

@ArgsType()
class UpdateCourierArgs {
  @Field(() => CourierWhereUniqueInput, { nullable: false })
  where!: CourierWhereUniqueInput;
  @Field(() => CourierUpdateInput, { nullable: false })
  data!: CourierUpdateInput;
}

export { UpdateCourierArgs as UpdateCourierArgs };
