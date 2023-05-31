import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IndividualService } from "./individual.service";
import { IndividualControllerBase } from "./base/individual.controller.base";

@swagger.ApiTags("individuals")
@common.Controller("individuals")
export class IndividualController extends IndividualControllerBase {
  constructor(
    protected readonly service: IndividualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
