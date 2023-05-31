
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
import { CreateScalarArgs } from "./CreateScalarArgs";
import { UpdateScalarArgs } from "./UpdateScalarArgs";
import { DeleteScalarArgs } from "./DeleteScalarArgs";
import { ScalarFindManyArgs } from "./ScalarFindManyArgs";
import { ScalarFindUniqueArgs } from "./ScalarFindUniqueArgs";
import { Scalar } from "./Scalar";
import { ItemQuantityFindManyArgs } from "../../itemQuantity/base/ItemQuantityFindManyArgs";
import { ItemQuantity } from "../../itemQuantity/base/ItemQuantity";
import { ScalarService } from "../scalar.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Scalar)
export class ScalarResolverBase {
  constructor(
    protected readonly service: ScalarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async _scalarsMeta(
    @graphql.Args() args: ScalarFindManyArgs
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
  @graphql.Query(() => [Scalar])
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async scalars(@graphql.Args() args: ScalarFindManyArgs): Promise<Scalar[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Scalar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "own",
  })
  async scalar(
    @graphql.Args() args: ScalarFindUniqueArgs
  ): Promise<Scalar | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Scalar)
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "create",
    possession: "any",
  })
  async createScalar(@graphql.Args() args: CreateScalarArgs): Promise<Scalar> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Scalar)
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async updateScalar(
    @graphql.Args() args: UpdateScalarArgs
  ): Promise<Scalar | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Scalar)
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "delete",
    possession: "any",
  })
  async deleteScalar(
    @graphql.Args() args: DeleteScalarArgs
  ): Promise<Scalar | null> {
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
  @graphql.ResolveField(() => [ItemQuantity])
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async itemQuantityAllocatedMeasure(
    @graphql.Parent() parent: Scalar,
    @graphql.Args() args: ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    const results = await this.service.findItemQuantityAllocatedMeasure(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ItemQuantity])
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async itemQuantityAvailableMeasure(
    @graphql.Parent() parent: Scalar,
    @graphql.Args() args: ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    const results = await this.service.findItemQuantityAvailableMeasure(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ItemQuantity])
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async itemQuantityMaximumPurchasableMeasure(
    @graphql.Parent() parent: Scalar,
    @graphql.Args() args: ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    const results =
      await this.service.findItemQuantityMaximumPurchasableMeasure(
        parent.id,
        args
      );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ItemQuantity])
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async itemQuantityMinimumPurchasableMeasure(
    @graphql.Parent() parent: Scalar,
    @graphql.Args() args: ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    const results =
      await this.service.findItemQuantityMinimumPurchasableMeasure(
        parent.id,
        args
      );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ItemQuantity])
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async itemQuantitySelectedMeasure(
    @graphql.Parent() parent: Scalar,
    @graphql.Args() args: ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    const results = await this.service.findItemQuantitySelectedMeasure(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
