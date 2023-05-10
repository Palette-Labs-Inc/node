
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
import { CreateFulfillmentSpecificationArgs } from "./CreateFulfillmentSpecificationArgs";
import { UpdateFulfillmentSpecificationArgs } from "./UpdateFulfillmentSpecificationArgs";
import { DeleteFulfillmentSpecificationArgs } from "./DeleteFulfillmentSpecificationArgs";
import { FulfillmentSpecificationFindManyArgs } from "./FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecificationFindUniqueArgs } from "./FulfillmentSpecificationFindUniqueArgs";
import { FulfillmentSpecification } from "./FulfillmentSpecification";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { SearchFindManyArgs } from "../../search/base/SearchFindManyArgs";
import { Search } from "../../search/base/Search";
import { WaypointFindManyArgs } from "../../waypoint/base/WaypointFindManyArgs";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { User } from "../../user/base/User";
import { Contact } from "../../contact/base/Contact";
import { Courier } from "../../courier/base/Courier";
import { Seller } from "../../seller/base/Seller";
import { Tracking } from "../../tracking/base/Tracking";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { FulfillmentSpecificationService } from "../fulfillmentSpecification.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FulfillmentSpecification)
export class FulfillmentSpecificationResolverBase {
  constructor(
    protected readonly service: FulfillmentSpecificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async _fulfillmentSpecificationsMeta(
    @graphql.Args() args: FulfillmentSpecificationFindManyArgs
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
  @graphql.Query(() => [FulfillmentSpecification])
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecifications(
    @graphql.Args() args: FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FulfillmentSpecification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "own",
  })
  async fulfillmentSpecification(
    @graphql.Args() args: FulfillmentSpecificationFindUniqueArgs
  ): Promise<FulfillmentSpecification | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FulfillmentSpecification)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "create",
    possession: "any",
  })
  async createFulfillmentSpecification(
    @graphql.Args() args: CreateFulfillmentSpecificationArgs
  ): Promise<FulfillmentSpecification> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        buyer: {
          connect: args.data.buyer,
        },

        contact: {
          connect: args.data.contact,
        },

        courier: args.data.courier
          ? {
              connect: args.data.courier,
            }
          : undefined,

        seller: {
          connect: args.data.seller,
        },

        tracking: args.data.tracking
          ? {
              connect: args.data.tracking,
            }
          : undefined,

        vehicle: args.data.vehicle
          ? {
              connect: args.data.vehicle,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FulfillmentSpecification)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async updateFulfillmentSpecification(
    @graphql.Args() args: UpdateFulfillmentSpecificationArgs
  ): Promise<FulfillmentSpecification | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          buyer: {
            connect: args.data.buyer,
          },

          contact: {
            connect: args.data.contact,
          },

          courier: args.data.courier
            ? {
                connect: args.data.courier,
              }
            : undefined,

          seller: {
            connect: args.data.seller,
          },

          tracking: args.data.tracking
            ? {
                connect: args.data.tracking,
              }
            : undefined,

          vehicle: args.data.vehicle
            ? {
                connect: args.data.vehicle,
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

  @graphql.Mutation(() => FulfillmentSpecification)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "delete",
    possession: "any",
  })
  async deleteFulfillmentSpecification(
    @graphql.Args() args: DeleteFulfillmentSpecificationArgs
  ): Promise<FulfillmentSpecification | null> {
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
  @graphql.ResolveField(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(
    @graphql.Parent() parent: FulfillmentSpecification,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Search])
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async searches(
    @graphql.Parent() parent: FulfillmentSpecification,
    @graphql.Args() args: SearchFindManyArgs
  ): Promise<Search[]> {
    const results = await this.service.findSearches(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Waypoint])
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  async waypoints(
    @graphql.Parent() parent: FulfillmentSpecification,
    @graphql.Args() args: WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    const results = await this.service.findWaypoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async buyer(
    @graphql.Parent() parent: FulfillmentSpecification
  ): Promise<User | null> {
    const result = await this.service.getBuyer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Contact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contact(
    @graphql.Parent() parent: FulfillmentSpecification
  ): Promise<Contact | null> {
    const result = await this.service.getContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Courier, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async courier(
    @graphql.Parent() parent: FulfillmentSpecification
  ): Promise<Courier | null> {
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
  async seller(
    @graphql.Parent() parent: FulfillmentSpecification
  ): Promise<Seller | null> {
    const result = await this.service.getSeller(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tracking, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "any",
  })
  async tracking(
    @graphql.Parent() parent: FulfillmentSpecification
  ): Promise<Tracking | null> {
    const result = await this.service.getTracking(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Vehicle, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  async vehicle(
    @graphql.Parent() parent: FulfillmentSpecification
  ): Promise<Vehicle | null> {
    const result = await this.service.getVehicle(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
