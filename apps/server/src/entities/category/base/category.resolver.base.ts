
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
import { CreateCategoryArgs } from "./CreateCategoryArgs";
import { UpdateCategoryArgs } from "./UpdateCategoryArgs";
import { DeleteCategoryArgs } from "./DeleteCategoryArgs";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryFindUniqueArgs } from "./CategoryFindUniqueArgs";
import { Category } from "./Category";
import { Seller } from "../../seller/base/Seller";
import { CategoryService } from "../category.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Category)
export class CategoryResolverBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async _categoriesMeta(
    @graphql.Args() args: CategoryFindManyArgs
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
  @graphql.Query(() => [Category])
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categories(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "own",
  })
  async category(
    @graphql.Args() args: CategoryFindUniqueArgs
  ): Promise<Category | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "create",
    possession: "any",
  })
  async createCategory(
    @graphql.Args() args: CreateCategoryArgs
  ): Promise<Category> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        seller: args.data.seller
          ? {
              connect: args.data.seller,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async updateCategory(
    @graphql.Args() args: UpdateCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "delete",
    possession: "any",
  })
  async deleteCategory(
    @graphql.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
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
  @graphql.ResolveField(() => Seller, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async seller(@graphql.Parent() parent: Category): Promise<Seller | null> {
    const result = await this.service.getSeller(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
