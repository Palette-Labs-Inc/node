import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModifierGroupService } from "./modifierGroup.service";
import { ModifierGroupControllerBase } from "./base/modifierGroup.controller.base";

@swagger.ApiTags("modifierGroups")
@common.Controller("modifierGroups")
export class ModifierGroupController extends ModifierGroupControllerBase {
  constructor(
    protected readonly service: ModifierGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
