
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SearchService } from "../search.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SearchCreateInput } from "./SearchCreateInput";
import { SearchWhereInput } from "./SearchWhereInput";
import { SearchWhereUniqueInput } from "./SearchWhereUniqueInput";
import { SearchFindManyArgs } from "./SearchFindManyArgs";
import { SearchUpdateInput } from "./SearchUpdateInput";
import { Search } from "./Search";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { SellerFindManyArgs } from "../../seller/base/SellerFindManyArgs";
import { Seller } from "../../seller/base/Seller";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SearchControllerBase {
  constructor(
    protected readonly service: SearchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Search })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SearchCreateInput): Promise<Search> {
    return await this.service.create({
      data: {
        ...data,

        fulfillmentSpecification: data.fulfillmentSpecification
          ? {
              connect: data.fulfillmentSpecification,
            }
          : undefined,

        menuItems: data.menuItems
          ? {
              connect: data.menuItems,
            }
          : undefined,

        paymentTerm: data.paymentTerm
          ? {
              connect: data.paymentTerm,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        paymentTerm: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Search] })
  @ApiNestedQuery(SearchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Search[]> {
    const args = plainToClass(SearchFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        paymentTerm: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Search })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SearchWhereUniqueInput
  ): Promise<Search | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        paymentTerm: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Search })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SearchWhereUniqueInput,
    @common.Body() data: SearchUpdateInput
  ): Promise<Search | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          fulfillmentSpecification: data.fulfillmentSpecification
            ? {
                connect: data.fulfillmentSpecification,
              }
            : undefined,

          menuItems: data.menuItems
            ? {
                connect: data.menuItems,
              }
            : undefined,

          paymentTerm: data.paymentTerm
            ? {
                connect: data.paymentTerm,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          fulfillmentSpecification: {
            select: {
              id: true,
            },
          },

          id: true,

          menuItems: {
            select: {
              id: true,
            },
          },

          paymentTerm: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Search })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SearchWhereUniqueInput
  ): Promise<Search | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          fulfillmentSpecification: {
            select: {
              id: true,
            },
          },

          id: true,

          menuItems: {
            select: {
              id: true,
            },
          },

          paymentTerm: {
            select: {
              id: true,
            },
          },

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
    @common.Param() params: SearchWhereUniqueInput
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
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async connectPromotions(
    @common.Param() params: SearchWhereUniqueInput,
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
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async updatePromotions(
    @common.Param() params: SearchWhereUniqueInput,
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
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async disconnectPromotions(
    @common.Param() params: SearchWhereUniqueInput,
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
    @common.Param() params: SearchWhereUniqueInput
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
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async connectSellers(
    @common.Param() params: SearchWhereUniqueInput,
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
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async updateSellers(
    @common.Param() params: SearchWhereUniqueInput,
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
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async disconnectSellers(
    @common.Param() params: SearchWhereUniqueInput,
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
