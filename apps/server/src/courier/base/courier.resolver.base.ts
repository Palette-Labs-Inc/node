
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
import { CreateCourierArgs } from "./CreateCourierArgs";
import { UpdateCourierArgs } from "./UpdateCourierArgs";
import { DeleteCourierArgs } from "./DeleteCourierArgs";
import { CourierFindManyArgs } from "./CourierFindManyArgs";
import { CourierFindUniqueArgs } from "./CourierFindUniqueArgs";
import { Courier } from "./Courier";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { Individual } from "../../individual/base/Individual";
import { User } from "../../user/base/User";
import { CourierService } from "../courier.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Courier)
export class CourierResolverBase {
  constructor(
    protected readonly service: CourierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async _couriersMeta(
    @graphql.Args() args: CourierFindManyArgs
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
  @graphql.Query(() => [Courier])
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async couriers(
    @graphql.Args() args: CourierFindManyArgs
  ): Promise<Courier[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Courier, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "own",
  })
  async courier(
    @graphql.Args() args: CourierFindUniqueArgs
  ): Promise<Courier | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Courier)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "create",
    possession: "any",
  })
  async createCourier(
    @graphql.Args() args: CreateCourierArgs
  ): Promise<Courier> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        inidividual: args.data.inidividual
          ? {
              connect: args.data.inidividual,
            }
          : undefined,

        users: {
          connect: args.data.users,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Courier)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async updateCourier(
    @graphql.Args() args: UpdateCourierArgs
  ): Promise<Courier | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          inidividual: args.data.inidividual
            ? {
                connect: args.data.inidividual,
              }
            : undefined,

          users: {
            connect: args.data.users,
          },
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

  @graphql.Mutation(() => Courier)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "delete",
    possession: "any",
  })
  async deleteCourier(
    @graphql.Args() args: DeleteCourierArgs
  ): Promise<Courier | null> {
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
  @graphql.ResolveField(() => [FulfillmentSpecification])
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecifications(
    @graphql.Parent() parent: Courier,
    @graphql.Args() args: FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    const results = await this.service.findFulfillmentSpecifications(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Organization])
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: Courier,
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    const results = await this.service.findOrganization(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Rating])
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async ratings(
    @graphql.Parent() parent: Courier,
    @graphql.Args() args: RatingFindManyArgs
  ): Promise<Rating[]> {
    const results = await this.service.findRatings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Individual, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async inidividual(
    @graphql.Parent() parent: Courier
  ): Promise<Individual | null> {
    const result = await this.service.getInidividual(parent.id);

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
  async users(@graphql.Parent() parent: Courier): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
