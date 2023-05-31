import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HourIntervalService } from "./hourInterval.service";
import { HourIntervalControllerBase } from "./base/hourInterval.controller.base";

@swagger.ApiTags("hourIntervals")
@common.Controller("hourIntervals")
export class HourIntervalController extends HourIntervalControllerBase {
  constructor(
    protected readonly service: HourIntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
