
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PromotionService } from "../promotion.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PromotionCreateInput } from "./PromotionCreateInput";
import { PromotionWhereInput } from "./PromotionWhereInput";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { PromotionFindManyArgs } from "./PromotionFindManyArgs";
import { PromotionUpdateInput } from "./PromotionUpdateInput";
import { Promotion } from "./Promotion";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PromotionControllerBase {
  constructor(
    protected readonly service: PromotionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Promotion })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PromotionCreateInput): Promise<Promotion> {
    return await this.service.create({
      data: {
        ...data,

        bazaar: data.bazaar
          ? {
              connect: data.bazaar,
            }
          : undefined,

        search: data.search
          ? {
              connect: data.search,
            }
          : undefined,

        seller: data.seller
          ? {
              connect: data.seller,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Promotion] })
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Promotion[]> {
    const args = plainToClass(PromotionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Promotion | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() data: PromotionUpdateInput
  ): Promise<Promotion | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          bazaar: data.bazaar
            ? {
                connect: data.bazaar,
              }
            : undefined,

          search: data.search
            ? {
                connect: data.search,
              }
            : undefined,

          seller: data.seller
            ? {
                connect: data.seller,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Promotion | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/locations")
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async findManyLocations(
    @common.Req() request: Request,
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Location[]> {
    const query = plainToClass(LocationFindManyArgs, request.query);
    const results = await this.service.findLocations(params.id, {
      ...query,
      select: {
        address: true,
        areaCode: true,
        city: true,
        coordinate: true,
        country: true,
        createdAt: true,
        id: true,
        mapUrl: true,

        node: {
          select: {
            id: true,
          },
        },

        organizations: {
          select: {
            id: true,
          },
        },

        radius: true,

        seller: {
          select: {
            id: true,
          },
        },

        state: true,

        trackings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        waypoints: {
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

  @common.Post("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async connectLocations(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async updateLocations(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async disconnectLocations(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
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
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        billing: {
          select: {
            id: true,
          },
        },

        cancellation: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        referenceOrderIds: true,
        status: true,
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

  @common.Post("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async connectOrders(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async disconnectOrders(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
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
