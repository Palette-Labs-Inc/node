
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderService } from "../order.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderCreateInput } from "./OrderCreateInput";
import { OrderWhereInput } from "./OrderWhereInput";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { Order } from "./Order";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.create({
      data: {
        ...data,

        billing: {
          connect: data.billing,
        },

        cancellation: data.cancellation
          ? {
              connect: data.cancellation,
            }
          : undefined,

        fulfillmentSpecification: {
          connect: data.fulfillmentSpecification,
        },

        paymentTerm: data.paymentTerm
          ? {
              connect: data.paymentTerm,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          billing: {
            connect: data.billing,
          },

          cancellation: data.cancellation
            ? {
                connect: data.cancellation,
              }
            : undefined,

          fulfillmentSpecification: {
            connect: data.fulfillmentSpecification,
          },

          paymentTerm: data.paymentTerm
            ? {
                connect: data.paymentTerm,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/menuItems")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyMenuItems(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findMenuItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        currencyCode: true,
        fulfillmentModes: true,
        id: true,
        isRateable: true,
        locationIDs: true,
        modifierGroupIDs: true,
        paymentModes: true,
        price: true,

        quantity: {
          select: {
            id: true,
          },
        },

        rating: true,

        sellers: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
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

  @common.Post("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectMenuItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateMenuItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
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
  @common.Get("/:id/promotion")
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async findManyPromotion(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Promotion[]> {
    const query = plainToClass(PromotionFindManyArgs, request.query);
    const results = await this.service.findPromotion(params.id, {
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

  @common.Post("/:id/promotion")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectPromotion(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotion: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promotion")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updatePromotion(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotion: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promotion")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectPromotion(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotion: {
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
