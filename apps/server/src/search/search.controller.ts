import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SearchService } from "./search.service";
import { SearchControllerBase } from "./base/search.controller.base";

@swagger.ApiTags("searches")
@common.Controller("searches")
export class SearchController extends SearchControllerBase {
  constructor(
    protected readonly service: SearchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
