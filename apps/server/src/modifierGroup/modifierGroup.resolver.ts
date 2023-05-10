import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ModifierGroupResolverBase } from "./base/modifierGroup.resolver.base";
import { ModifierGroup } from "./base/ModifierGroup";
import { ModifierGroupService } from "./modifierGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModifierGroup)
export class ModifierGroupResolver extends ModifierGroupResolverBase {
  constructor(
    protected readonly service: ModifierGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
