
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
import { CreateRatingArgs } from "./CreateRatingArgs";
import { UpdateRatingArgs } from "./UpdateRatingArgs";
import { DeleteRatingArgs } from "./DeleteRatingArgs";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingFindUniqueArgs } from "./RatingFindUniqueArgs";
import { Rating } from "./Rating";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { MediaFileFindManyArgs } from "../../mediaFile/base/MediaFileFindManyArgs";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { Courier } from "../../courier/base/Courier";
import { Seller } from "../../seller/base/Seller";
import { RatingService } from "../rating.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rating)
export class RatingResolverBase {
  constructor(
    protected readonly service: RatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async _ratingsMeta(
    @graphql.Args() args: RatingFindManyArgs
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
  @graphql.Query(() => [Rating])
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async ratings(@graphql.Args() args: RatingFindManyArgs): Promise<Rating[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Rating, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "own",
  })
  async rating(
    @graphql.Args() args: RatingFindUniqueArgs
  ): Promise<Rating | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "create",
    possession: "any",
  })
  async createRating(@graphql.Args() args: CreateRatingArgs): Promise<Rating> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        courier: args.data.courier
          ? {
              connect: args.data.courier,
            }
          : undefined,

        seller: args.data.seller
          ? {
              connect: args.data.seller,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async updateRating(
    @graphql.Args() args: UpdateRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          courier: args.data.courier
            ? {
                connect: args.data.courier,
              }
            : undefined,

          seller: args.data.seller
            ? {
                connect: args.data.seller,
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

  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "delete",
    possession: "any",
  })
  async deleteRating(
    @graphql.Args() args: DeleteRatingArgs
  ): Promise<Rating | null> {
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
  @graphql.ResolveField(() => [Image])
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async images(
    @graphql.Parent() parent: Rating,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MediaFile])
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  async media(
    @graphql.Parent() parent: Rating,
    @graphql.Args() args: MediaFileFindManyArgs
  ): Promise<MediaFile[]> {
    const results = await this.service.findMedia(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Courier, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async courier(@graphql.Parent() parent: Rating): Promise<Courier | null> {
    const result = await this.service.getCourier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Seller, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async seller(@graphql.Parent() parent: Rating): Promise<Seller | null> {
    const result = await this.service.getSeller(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
