
import { ArgsType, Field } from "@nestjs/graphql";
import { CourierCreateInput } from "./CourierCreateInput";

@ArgsType()
class CreateCourierArgs {
  @Field(() => CourierCreateInput, { nullable: false })
  data!: CourierCreateInput;
}

export { CreateCourierArgs as CreateCourierArgs };
