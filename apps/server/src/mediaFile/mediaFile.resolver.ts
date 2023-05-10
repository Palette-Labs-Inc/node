import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MediaFileResolverBase } from "./base/mediaFile.resolver.base";
import { MediaFile } from "./base/MediaFile";
import { MediaFileService } from "./mediaFile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MediaFile)
export class MediaFileResolver extends MediaFileResolverBase {
  constructor(
    protected readonly service: MediaFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
