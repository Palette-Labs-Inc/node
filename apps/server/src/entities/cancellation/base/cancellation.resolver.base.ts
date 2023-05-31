
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
import { CreateCancellationArgs } from "./CreateCancellationArgs";
import { UpdateCancellationArgs } from "./UpdateCancellationArgs";
import { DeleteCancellationArgs } from "./DeleteCancellationArgs";
import { CancellationFindManyArgs } from "./CancellationFindManyArgs";
import { CancellationFindUniqueArgs } from "./CancellationFindUniqueArgs";
import { Cancellation } from "./Cancellation";
import { Order } from "../../order/base/Order";
import { CancellationService } from "../cancellation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Cancellation)
export class CancellationResolverBase {
  constructor(
    protected readonly service: CancellationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "any",
  })
  async _cancellationsMeta(
    @graphql.Args() args: CancellationFindManyArgs
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
  @graphql.Query(() => [Cancellation])
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "any",
  })
  async cancellations(
    @graphql.Args() args: CancellationFindManyArgs
  ): Promise<Cancellation[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Cancellation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "own",
  })
  async cancellation(
    @graphql.Args() args: CancellationFindUniqueArgs
  ): Promise<Cancellation | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Cancellation)
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "create",
    possession: "any",
  })
  async createCancellation(
    @graphql.Args() args: CreateCancellationArgs
  ): Promise<Cancellation> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Cancellation)
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "update",
    possession: "any",
  })
  async updateCancellation(
    @graphql.Args() args: UpdateCancellationArgs
  ): Promise<Cancellation | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
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

  @graphql.Mutation(() => Cancellation)
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "delete",
    possession: "any",
  })
  async deleteCancellation(
    @graphql.Args() args: DeleteCancellationArgs
  ): Promise<Cancellation | null> {
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
  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async order(@graphql.Parent() parent: Cancellation): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
