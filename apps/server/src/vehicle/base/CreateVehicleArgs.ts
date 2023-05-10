
import { ArgsType, Field } from "@nestjs/graphql";
import { VehicleCreateInput } from "./VehicleCreateInput";

@ArgsType()
class CreateVehicleArgs {
  @Field(() => VehicleCreateInput, { nullable: false })
  data!: VehicleCreateInput;
}

export { CreateVehicleArgs as CreateVehicleArgs };
