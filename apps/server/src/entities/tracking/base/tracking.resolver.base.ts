
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../../prisma.util";
import { MetaQueryPayload } from "../../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTrackingArgs } from "./CreateTrackingArgs";
import { UpdateTrackingArgs } from "./UpdateTrackingArgs";
import { DeleteTrackingArgs } from "./DeleteTrackingArgs";
import { TrackingFindManyArgs } from "./TrackingFindManyArgs";
import { TrackingFindUniqueArgs } from "./TrackingFindUniqueArgs";
import { Tracking } from "./Tracking";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Location } from "../../location/base/Location";
import { TrackingService } from "../tracking.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tracking)
export class TrackingResolverBase {
  constructor(
    protected readonly service: TrackingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "any",
  })
  async _trackingsMeta(
    @graphql.Args() args: TrackingFindManyArgs
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
  @graphql.Query(() => [Tracking])
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "any",
  })
  async trackings(
    @graphql.Args() args: TrackingFindManyArgs
  ): Promise<Tracking[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tracking, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "own",
  })
  async tracking(
    @graphql.Args() args: TrackingFindUniqueArgs
  ): Promise<Tracking | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tracking)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "create",
    possession: "any",
  })
  async createTracking(
    @graphql.Args() args: CreateTrackingArgs
  ): Promise<Tracking> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        fulfillmentSpecifications: args.data.fulfillmentSpecifications
          ? {
              connect: args.data.fulfillmentSpecifications,
            }
          : undefined,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tracking)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "update",
    possession: "any",
  })
  async updateTracking(
    @graphql.Args() args: UpdateTrackingArgs
  ): Promise<Tracking | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          fulfillmentSpecifications: args.data.fulfillmentSpecifications
            ? {
                connect: args.data.fulfillmentSpecifications,
              }
            : undefined,

          location: args.data.location
            ? {
                connect: args.data.location,
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

  @graphql.Mutation(() => Tracking)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "delete",
    possession: "any",
  })
  async deleteTracking(
    @graphql.Args() args: DeleteTrackingArgs
  ): Promise<Tracking | null> {
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
  @graphql.ResolveField(() => FulfillmentSpecification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecifications(
    @graphql.Parent() parent: Tracking
  ): Promise<FulfillmentSpecification | null> {
    const result = await this.service.getFulfillmentSpecifications(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Location, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async location(@graphql.Parent() parent: Tracking): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
