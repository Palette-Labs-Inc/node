
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMediaFileArgs } from "./CreateMediaFileArgs";
import { UpdateMediaFileArgs } from "./UpdateMediaFileArgs";
import { DeleteMediaFileArgs } from "./DeleteMediaFileArgs";
import { MediaFileFindManyArgs } from "./MediaFileFindManyArgs";
import { MediaFileFindUniqueArgs } from "./MediaFileFindUniqueArgs";
import { MediaFile } from "./MediaFile";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Rating } from "../../rating/base/Rating";
import { MediaFileService } from "../mediaFile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MediaFile)
export class MediaFileResolverBase {
  constructor(
    protected readonly service: MediaFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  async _mediaFilesMeta(
    @graphql.Args() args: MediaFileFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MediaFile])
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  async mediaFiles(
    @graphql.Args() args: MediaFileFindManyArgs
  ): Promise<MediaFile[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MediaFile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "own",
  })
  async mediaFile(
    @graphql.Args() args: MediaFileFindUniqueArgs
  ): Promise<MediaFile | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MediaFile)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "create",
    possession: "any",
  })
  async createMediaFile(
    @graphql.Args() args: CreateMediaFileArgs
  ): Promise<MediaFile> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        menuItems: args.data.menuItems
          ? {
              connect: args.data.menuItems,
            }
          : undefined,

        rating: args.data.rating
          ? {
              connect: args.data.rating,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MediaFile)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "update",
    possession: "any",
  })
  async updateMediaFile(
    @graphql.Args() args: UpdateMediaFileArgs
  ): Promise<MediaFile | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          menuItems: args.data.menuItems
            ? {
                connect: args.data.menuItems,
              }
            : undefined,

          rating: args.data.rating
            ? {
                connect: args.data.rating,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MediaFile)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "delete",
    possession: "any",
  })
  async deleteMediaFile(
    @graphql.Args() args: DeleteMediaFileArgs
  ): Promise<MediaFile | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => MenuItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItems(
    @graphql.Parent() parent: MediaFile
  ): Promise<MenuItem | null> {
    const result = await this.service.getMenuItems(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Rating, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async rating(@graphql.Parent() parent: MediaFile): Promise<Rating | null> {
    const result = await this.service.getRating(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
