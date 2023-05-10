
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BillingService } from "../billing.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BillingCreateInput } from "./BillingCreateInput";
import { BillingWhereInput } from "./BillingWhereInput";
import { BillingWhereUniqueInput } from "./BillingWhereUniqueInput";
import { BillingFindManyArgs } from "./BillingFindManyArgs";
import { BillingUpdateInput } from "./BillingUpdateInput";
import { Billing } from "./Billing";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BillingControllerBase {
  constructor(
    protected readonly service: BillingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Billing })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: BillingCreateInput): Promise<Billing> {
    return await this.service.create({
      data: {
        ...data,

        organization: {
          connect: data.organization,
        },
      },
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        state: true,
        taxId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Billing] })
  @ApiNestedQuery(BillingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Billing[]> {
    const args = plainToClass(BillingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        state: true,
        taxId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Billing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: BillingWhereUniqueInput
  ): Promise<Billing | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        state: true,
        taxId: true,
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
  @swagger.ApiOkResponse({ type: Billing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: BillingWhereUniqueInput,
    @common.Body() data: BillingUpdateInput
  ): Promise<Billing | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organization: {
            connect: data.organization,
          },
        },
        select: {
          address: true,
          city: true,
          country: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,

          organization: {
            select: {
              id: true,
            },
          },

          phone: true,
          state: true,
          taxId: true,
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
  @swagger.ApiOkResponse({ type: Billing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: BillingWhereUniqueInput
  ): Promise<Billing | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          city: true,
          country: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,

          organization: {
            select: {
              id: true,
            },
          },

          phone: true,
          state: true,
          taxId: true,
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
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: BillingWhereUniqueInput
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
    resource: "Billing",
    action: "update",
    possession: "any",
  })
  async connectOrders(
    @common.Param() params: BillingWhereUniqueInput,
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
    resource: "Billing",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: BillingWhereUniqueInput,
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
    resource: "Billing",
    action: "update",
    possession: "any",
  })
  async disconnectOrders(
    @common.Param() params: BillingWhereUniqueInput,
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
