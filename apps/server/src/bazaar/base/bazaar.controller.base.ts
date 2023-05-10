import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BazaarService } from "../bazaar.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BazaarCreateInput } from "./BazaarCreateInput";
import { BazaarWhereInput } from "./BazaarWhereInput";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";
import { BazaarFindManyArgs } from "./BazaarFindManyArgs";
import { BazaarUpdateInput } from "./BazaarUpdateInput";
import { Bazaar } from "./Bazaar";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { SellerFindManyArgs } from "../../seller/base/SellerFindManyArgs";
import { Seller } from "../../seller/base/Seller";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BazaarControllerBase {
  constructor(
    protected readonly service: BazaarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bazaar })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: BazaarCreateInput): Promise<Bazaar> {
    return await this.service.create({
      data: {
        ...data,

        paymentTerms: data.paymentTerms
          ? {
              connect: data.paymentTerms,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        fulfillmentModes: true,
        id: true,

        paymentTerms: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bazaar] })
  @ApiNestedQuery(BazaarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Bazaar[]> {
    const args = plainToClass(BazaarFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        fulfillmentModes: true,
        id: true,

        paymentTerms: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bazaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Bazaar | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        fulfillmentModes: true,
        id: true,

        paymentTerms: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bazaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() data: BazaarUpdateInput
  ): Promise<Bazaar | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          paymentTerms: data.paymentTerms
            ? {
                connect: data.paymentTerms,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          fulfillmentModes: true,
          id: true,

          paymentTerms: {
            select: {
              id: true,
            },
          },

          timeToLive: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bazaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Bazaar | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          fulfillmentModes: true,
          id: true,

          paymentTerms: {
            select: {
              id: true,
            },
          },

          timeToLive: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/promotions")
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async findManyPromotions(
    @common.Req() request: Request,
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Promotion[]> {
    const query = plainToClass(PromotionFindManyArgs, request.query);
    const results = await this.service.findPromotions(params.id, {
      ...query,
      select: {
        amount: true,

        bazaar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        maximumPurchase: true,
        minimumPurchase: true,
        name: true,
        percentage: true,

        search: {
          select: {
            id: true,
          },
        },

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async connectPromotions(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async updatePromotions(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async disconnectPromotions(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sellers")
  @ApiNestedQuery(SellerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async findManySellers(
    @common.Req() request: Request,
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Seller[]> {
    const query = plainToClass(SellerFindManyArgs, request.query);
    const results = await this.service.findSellers(params.id, {
      ...query,
      select: {
        createdAt: true,
        holidays: true,
        id: true,
        isRateable: true,
        password: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        rating: true,

        search: {
          select: {
            id: true,
          },
        },

        sellerClassificationId: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sellers")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async connectSellers(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: SellerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sellers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sellers")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async updateSellers(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: SellerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sellers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sellers")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async disconnectSellers(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: SellerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sellers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
