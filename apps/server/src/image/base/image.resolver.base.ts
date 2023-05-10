
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateImageArgs } from "./CreateImageArgs";
import { UpdateImageArgs } from "./UpdateImageArgs";
import { DeleteImageArgs } from "./DeleteImageArgs";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageFindUniqueArgs } from "./ImageFindUniqueArgs";
import { Image } from "./Image";
import { Individual } from "../../individual/base/Individual";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Rating } from "../../rating/base/Rating";
import { ImageService } from "../image.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Image)
export class ImageResolverBase {
  constructor(
    protected readonly service: ImageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async _imagesMeta(
    @graphql.Args() args: ImageFindManyArgs
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
  @graphql.Query(() => [Image])
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async images(@graphql.Args() args: ImageFindManyArgs): Promise<Image[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Image, { nullable: true })
  async image(
    @graphql.Args() args: ImageFindUniqueArgs
  ): Promise<Image | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Image)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "create",
    possession: "any",
  })
  async createImage(@graphql.Args() args: CreateImageArgs): Promise<Image> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        individuals: args.data.individuals
          ? {
              connect: args.data.individuals,
            }
          : undefined,

        menuItem: args.data.menuItem
          ? {
              connect: args.data.menuItem,
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
  @graphql.Mutation(() => Image)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "update",
    possession: "any",
  })
  async updateImage(
    @graphql.Args() args: UpdateImageArgs
  ): Promise<Image | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          individuals: args.data.individuals
            ? {
                connect: args.data.individuals,
              }
            : undefined,

          menuItem: args.data.menuItem
            ? {
                connect: args.data.menuItem,
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

  @graphql.Mutation(() => Image)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "delete",
    possession: "any",
  })
  async deleteImage(
    @graphql.Args() args: DeleteImageArgs
  ): Promise<Image | null> {
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
  @graphql.ResolveField(() => Individual, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async individuals(
    @graphql.Parent() parent: Image
  ): Promise<Individual | null> {
    const result = await this.service.getIndividuals(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => MenuItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItem(@graphql.Parent() parent: Image): Promise<MenuItem | null> {
    const result = await this.service.getMenuItem(parent.id);

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
  async rating(@graphql.Parent() parent: Image): Promise<Rating | null> {
    const result = await this.service.getRating(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
