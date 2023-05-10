
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
import { CreateLocationArgs } from "./CreateLocationArgs";
import { UpdateLocationArgs } from "./UpdateLocationArgs";
import { DeleteLocationArgs } from "./DeleteLocationArgs";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationFindUniqueArgs } from "./LocationFindUniqueArgs";
import { Location } from "./Location";
import { ConditionFindManyArgs } from "../../condition/base/ConditionFindManyArgs";
import { Condition } from "../../condition/base/Condition";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { Node } from "../../node/base/Node";
import { Organization } from "../../organization/base/Organization";
import { Seller } from "../../seller/base/Seller";
import { Tracking } from "../../tracking/base/Tracking";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { LocationService } from "../location.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Location)
export class LocationResolverBase {
  constructor(
    protected readonly service: LocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async _locationsMeta(
    @graphql.Args() args: LocationFindManyArgs
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
  @graphql.Query(() => [Location])
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async locations(
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Location, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "own",
  })
  async location(
    @graphql.Args() args: LocationFindUniqueArgs
  ): Promise<Location | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Location)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "create",
    possession: "any",
  })
  async createLocation(
    @graphql.Args() args: CreateLocationArgs
  ): Promise<Location> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        node: args.data.node
          ? {
              connect: args.data.node,
            }
          : undefined,

        organizations: args.data.organizations
          ? {
              connect: args.data.organizations,
            }
          : undefined,

        seller: args.data.seller
          ? {
              connect: args.data.seller,
            }
          : undefined,

        trackings: args.data.trackings
          ? {
              connect: args.data.trackings,
            }
          : undefined,

        waypoints: args.data.waypoints
          ? {
              connect: args.data.waypoints,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Location)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async updateLocation(
    @graphql.Args() args: UpdateLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          node: args.data.node
            ? {
                connect: args.data.node,
              }
            : undefined,

          organizations: args.data.organizations
            ? {
                connect: args.data.organizations,
              }
            : undefined,

          seller: args.data.seller
            ? {
                connect: args.data.seller,
              }
            : undefined,

          trackings: args.data.trackings
            ? {
                connect: args.data.trackings,
              }
            : undefined,

          waypoints: args.data.waypoints
            ? {
                connect: args.data.waypoints,
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

  @graphql.Mutation(() => Location)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "delete",
    possession: "any",
  })
  async deleteLocation(
    @graphql.Args() args: DeleteLocationArgs
  ): Promise<Location | null> {
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
  @graphql.ResolveField(() => [Condition])
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "any",
  })
  async conditions(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: ConditionFindManyArgs
  ): Promise<Condition[]> {
    const results = await this.service.findConditions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Promotion])
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async promotion(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    const results = await this.service.findPromotion(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Node, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "any",
  })
  async node(@graphql.Parent() parent: Location): Promise<Node | null> {
    const result = await this.service.getNode(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organizations(
    @graphql.Parent() parent: Location
  ): Promise<Organization | null> {
    const result = await this.service.getOrganizations(parent.id);

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
  async seller(@graphql.Parent() parent: Location): Promise<Seller | null> {
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
  async trackings(
    @graphql.Parent() parent: Location
  ): Promise<Tracking | null> {
    const result = await this.service.getTrackings(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Waypoint, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  async waypoints(
    @graphql.Parent() parent: Location
  ): Promise<Waypoint | null> {
    const result = await this.service.getWaypoints(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
