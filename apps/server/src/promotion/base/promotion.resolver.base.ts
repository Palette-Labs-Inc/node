
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
import { CreatePromotionArgs } from "./CreatePromotionArgs";
import { UpdatePromotionArgs } from "./UpdatePromotionArgs";
import { DeletePromotionArgs } from "./DeletePromotionArgs";
import { PromotionFindManyArgs } from "./PromotionFindManyArgs";
import { PromotionFindUniqueArgs } from "./PromotionFindUniqueArgs";
import { Promotion } from "./Promotion";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { Search } from "../../search/base/Search";
import { Seller } from "../../seller/base/Seller";
import { PromotionService } from "../promotion.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Promotion)
export class PromotionResolverBase {
  constructor(
    protected readonly service: PromotionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async _promotionsMeta(
    @graphql.Args() args: PromotionFindManyArgs
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
  @graphql.Query(() => [Promotion])
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async promotions(
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Promotion, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "own",
  })
  async promotion(
    @graphql.Args() args: PromotionFindUniqueArgs
  ): Promise<Promotion | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Promotion)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "create",
    possession: "any",
  })
  async createPromotion(
    @graphql.Args() args: CreatePromotionArgs
  ): Promise<Promotion> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        bazaar: args.data.bazaar
          ? {
              connect: args.data.bazaar,
            }
          : undefined,

        search: args.data.search
          ? {
              connect: args.data.search,
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
  @graphql.Mutation(() => Promotion)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async updatePromotion(
    @graphql.Args() args: UpdatePromotionArgs
  ): Promise<Promotion | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          bazaar: args.data.bazaar
            ? {
                connect: args.data.bazaar,
              }
            : undefined,

          search: args.data.search
            ? {
                connect: args.data.search,
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

  @graphql.Mutation(() => Promotion)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "delete",
    possession: "any",
  })
  async deletePromotion(
    @graphql.Args() args: DeletePromotionArgs
  ): Promise<Promotion | null> {
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
  @graphql.ResolveField(() => [Location])
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async locations(
    @graphql.Parent() parent: Promotion,
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    const results = await this.service.findLocations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(
    @graphql.Parent() parent: Promotion,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Bazaar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  async bazaar(@graphql.Parent() parent: Promotion): Promise<Bazaar | null> {
    const result = await this.service.getBazaar(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Search, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async search(@graphql.Parent() parent: Promotion): Promise<Search | null> {
    const result = await this.service.getSearch(parent.id);

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
  async seller(@graphql.Parent() parent: Promotion): Promise<Seller | null> {
    const result = await this.service.getSeller(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
