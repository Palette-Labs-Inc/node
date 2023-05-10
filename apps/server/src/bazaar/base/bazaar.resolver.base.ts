
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
import { CreateBazaarArgs } from "./CreateBazaarArgs";
import { UpdateBazaarArgs } from "./UpdateBazaarArgs";
import { DeleteBazaarArgs } from "./DeleteBazaarArgs";
import { BazaarFindManyArgs } from "./BazaarFindManyArgs";
import { BazaarFindUniqueArgs } from "./BazaarFindUniqueArgs";
import { Bazaar } from "./Bazaar";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { SellerFindManyArgs } from "../../seller/base/SellerFindManyArgs";
import { Seller } from "../../seller/base/Seller";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { BazaarService } from "../bazaar.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bazaar)
export class BazaarResolverBase {
  constructor(
    protected readonly service: BazaarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  async _bazaarsMeta(
    @graphql.Args() args: BazaarFindManyArgs
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
  @graphql.Query(() => [Bazaar])
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  async bazaars(@graphql.Args() args: BazaarFindManyArgs): Promise<Bazaar[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bazaar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "own",
  })
  async bazaar(
    @graphql.Args() args: BazaarFindUniqueArgs
  ): Promise<Bazaar | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bazaar)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "create",
    possession: "any",
  })
  async createBazaar(@graphql.Args() args: CreateBazaarArgs): Promise<Bazaar> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        paymentTerms: args.data.paymentTerms
          ? {
              connect: args.data.paymentTerms,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bazaar)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async updateBazaar(
    @graphql.Args() args: UpdateBazaarArgs
  ): Promise<Bazaar | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          paymentTerms: args.data.paymentTerms
            ? {
                connect: args.data.paymentTerms,
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

  @graphql.Mutation(() => Bazaar)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "delete",
    possession: "any",
  })
  async deleteBazaar(
    @graphql.Args() args: DeleteBazaarArgs
  ): Promise<Bazaar | null> {
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
  @graphql.ResolveField(() => [Promotion])
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async promotions(
    @graphql.Parent() parent: Bazaar,
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    const results = await this.service.findPromotions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Seller])
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async sellers(
    @graphql.Parent() parent: Bazaar,
    @graphql.Args() args: SellerFindManyArgs
  ): Promise<Seller[]> {
    const results = await this.service.findSellers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentTerm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async paymentTerms(
    @graphql.Parent() parent: Bazaar
  ): Promise<PaymentTerm | null> {
    const result = await this.service.getPaymentTerms(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
