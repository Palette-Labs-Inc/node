
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
import { CreatePaymentSourceArgs } from "./CreatePaymentSourceArgs";
import { UpdatePaymentSourceArgs } from "./UpdatePaymentSourceArgs";
import { DeletePaymentSourceArgs } from "./DeletePaymentSourceArgs";
import { PaymentSourceFindManyArgs } from "./PaymentSourceFindManyArgs";
import { PaymentSourceFindUniqueArgs } from "./PaymentSourceFindUniqueArgs";
import { PaymentSource } from "./PaymentSource";
import { PaymentTermFindManyArgs } from "../../paymentTerm/base/PaymentTermFindManyArgs";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { User } from "../../user/base/User";
import { PaymentSourceService } from "../paymentSource.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentSource)
export class PaymentSourceResolverBase {
  constructor(
    protected readonly service: PaymentSourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "any",
  })
  async _paymentSourcesMeta(
    @graphql.Args() args: PaymentSourceFindManyArgs
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
  @graphql.Query(() => [PaymentSource])
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "any",
  })
  async paymentSources(
    @graphql.Args() args: PaymentSourceFindManyArgs
  ): Promise<PaymentSource[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PaymentSource, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "own",
  })
  async paymentSource(
    @graphql.Args() args: PaymentSourceFindUniqueArgs
  ): Promise<PaymentSource | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentSource)
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "create",
    possession: "any",
  })
  async createPaymentSource(
    @graphql.Args() args: CreatePaymentSourceArgs
  ): Promise<PaymentSource> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        users: args.data.users
          ? {
              connect: args.data.users,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentSource)
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "update",
    possession: "any",
  })
  async updatePaymentSource(
    @graphql.Args() args: UpdatePaymentSourceArgs
  ): Promise<PaymentSource | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => PaymentSource)
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "delete",
    possession: "any",
  })
  async deletePaymentSource(
    @graphql.Args() args: DeletePaymentSourceArgs
  ): Promise<PaymentSource | null> {
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
  @graphql.ResolveField(() => [PaymentTerm])
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async payments(
    @graphql.Parent() parent: PaymentSource,
    @graphql.Args() args: PaymentTermFindManyArgs
  ): Promise<PaymentTerm[]> {
    const results = await this.service.findPayments(parent.id, args);

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
  async users(@graphql.Parent() parent: PaymentSource): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
