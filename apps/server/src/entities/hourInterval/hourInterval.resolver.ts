import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HourIntervalResolverBase } from "./base/hourInterval.resolver.base";
import { HourInterval } from "./base/HourInterval";
import { HourIntervalService } from "./hourInterval.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HourInterval)
export class HourIntervalResolver extends HourIntervalResolverBase {
  constructor(
    protected readonly service: HourIntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
