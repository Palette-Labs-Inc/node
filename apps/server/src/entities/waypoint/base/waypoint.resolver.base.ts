
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
import { CreateWaypointArgs } from "./CreateWaypointArgs";
import { UpdateWaypointArgs } from "./UpdateWaypointArgs";
import { DeleteWaypointArgs } from "./DeleteWaypointArgs";
import { WaypointFindManyArgs } from "./WaypointFindManyArgs";
import { WaypointFindUniqueArgs } from "./WaypointFindUniqueArgs";
import { Waypoint } from "./Waypoint";
import { IndividualFindManyArgs } from "../../individual/base/IndividualFindManyArgs";
import { Individual } from "../../individual/base/Individual";
import { Contact } from "../../contact/base/Contact";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Location } from "../../location/base/Location";
import { WaypointService } from "../waypoint.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Waypoint)
export class WaypointResolverBase {
  constructor(
    protected readonly service: WaypointService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  async _waypointsMeta(
    @graphql.Args() args: WaypointFindManyArgs
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
  @graphql.Query(() => [Waypoint])
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  async waypoints(
    @graphql.Args() args: WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Waypoint, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "own",
  })
  async waypoint(
    @graphql.Args() args: WaypointFindUniqueArgs
  ): Promise<Waypoint | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Waypoint)
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "create",
    possession: "any",
  })
  async createWaypoint(
    @graphql.Args() args: CreateWaypointArgs
  ): Promise<Waypoint> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        contact: args.data.contact
          ? {
              connect: args.data.contact,
            }
          : undefined,

        fulfillmentSpecification: args.data.fulfillmentSpecification
          ? {
              connect: args.data.fulfillmentSpecification,
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
  @graphql.Mutation(() => Waypoint)
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "update",
    possession: "any",
  })
  async updateWaypoint(
    @graphql.Args() args: UpdateWaypointArgs
  ): Promise<Waypoint | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          contact: args.data.contact
            ? {
                connect: args.data.contact,
              }
            : undefined,

          fulfillmentSpecification: args.data.fulfillmentSpecification
            ? {
                connect: args.data.fulfillmentSpecification,
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

  @graphql.Mutation(() => Waypoint)
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "delete",
    possession: "any",
  })
  async deleteWaypoint(
    @graphql.Args() args: DeleteWaypointArgs
  ): Promise<Waypoint | null> {
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
  @graphql.ResolveField(() => [Individual])
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async individual(
    @graphql.Parent() parent: Waypoint,
    @graphql.Args() args: IndividualFindManyArgs
  ): Promise<Individual[]> {
    const results = await this.service.findIndividual(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Contact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contact(@graphql.Parent() parent: Waypoint): Promise<Contact | null> {
    const result = await this.service.getContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => FulfillmentSpecification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecification(
    @graphql.Parent() parent: Waypoint
  ): Promise<FulfillmentSpecification | null> {
    const result = await this.service.getFulfillmentSpecification(parent.id);

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
  async location(@graphql.Parent() parent: Waypoint): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
