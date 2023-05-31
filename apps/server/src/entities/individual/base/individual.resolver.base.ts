
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
import { CreateIndividualArgs } from "./CreateIndividualArgs";
import { UpdateIndividualArgs } from "./UpdateIndividualArgs";
import { DeleteIndividualArgs } from "./DeleteIndividualArgs";
import { IndividualFindManyArgs } from "./IndividualFindManyArgs";
import { IndividualFindUniqueArgs } from "./IndividualFindUniqueArgs";
import { Individual } from "./Individual";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { WaypointFindManyArgs } from "../../waypoint/base/WaypointFindManyArgs";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { Contact } from "../../contact/base/Contact";
import { Courier } from "../../courier/base/Courier";
import { User } from "../../user/base/User";
import { IndividualService } from "../individual.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Individual)
export class IndividualResolverBase {
  constructor(
    protected readonly service: IndividualService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async _individualsMeta(
    @graphql.Args() args: IndividualFindManyArgs
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
  @graphql.Query(() => [Individual])
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async individuals(
    @graphql.Args() args: IndividualFindManyArgs
  ): Promise<Individual[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Individual, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "own",
  })
  async individual(
    @graphql.Args() args: IndividualFindUniqueArgs
  ): Promise<Individual | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Individual)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "create",
    possession: "any",
  })
  async createIndividual(
    @graphql.Args() args: CreateIndividualArgs
  ): Promise<Individual> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        contact: args.data.contact
          ? {
              connect: args.data.contact,
            }
          : undefined,

        couriers: args.data.couriers
          ? {
              connect: args.data.couriers,
            }
          : undefined,

        users: args.data.users
          ? {
              connect: args.data.users,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Individual)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async updateIndividual(
    @graphql.Args() args: UpdateIndividualArgs
  ): Promise<Individual | null> {
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

          couriers: args.data.couriers
            ? {
                connect: args.data.couriers,
              }
            : undefined,

          users: args.data.users
            ? {
                connect: args.data.users,
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

  @graphql.Mutation(() => Individual)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "delete",
    possession: "any",
  })
  async deleteIndividual(
    @graphql.Args() args: DeleteIndividualArgs
  ): Promise<Individual | null> {
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
  async image(
    @graphql.Parent() parent: Individual,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImage(parent.id, args);

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
    @graphql.Parent() parent: Individual,
    @graphql.Args() args: WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    const results = await this.service.findWaypoints(parent.id, args);

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
  async contact(@graphql.Parent() parent: Individual): Promise<Contact | null> {
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
  async couriers(
    @graphql.Parent() parent: Individual
  ): Promise<Courier | null> {
    const result = await this.service.getCouriers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Parent() parent: Individual): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
