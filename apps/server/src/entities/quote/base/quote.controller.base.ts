
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuoteService } from "../quote.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuoteCreateInput } from "./QuoteCreateInput";
import { QuoteWhereInput } from "./QuoteWhereInput";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";
import { QuoteFindManyArgs } from "./QuoteFindManyArgs";
import { QuoteUpdateInput } from "./QuoteUpdateInput";
import { Quote } from "./Quote";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuoteControllerBase {
  constructor(
    protected readonly service: QuoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Quote })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: QuoteCreateInput): Promise<Quote> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        currencyCode: true,
        id: true,
        timeToLive: true,
        totalPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Quote] })
  @ApiNestedQuery(QuoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Quote[]> {
    const args = plainToClass(QuoteFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        currencyCode: true,
        id: true,
        timeToLive: true,
        totalPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Quote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: QuoteWhereUniqueInput
  ): Promise<Quote | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        currencyCode: true,
        id: true,
        timeToLive: true,
        totalPrice: true,
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
  @swagger.ApiOkResponse({ type: Quote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: QuoteWhereUniqueInput,
    @common.Body() data: QuoteUpdateInput
  ): Promise<Quote | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          currencyCode: true,
          id: true,
          timeToLive: true,
          totalPrice: true,
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
  @swagger.ApiOkResponse({ type: Quote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: QuoteWhereUniqueInput
  ): Promise<Quote | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          currencyCode: true,
          id: true,
          timeToLive: true,
          totalPrice: true,
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
    @common.Param() params: QuoteWhereUniqueInput
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
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async connectMenuItems(
    @common.Param() params: QuoteWhereUniqueInput,
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
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async updateMenuItems(
    @common.Param() params: QuoteWhereUniqueInput,
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
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItems(
    @common.Param() params: QuoteWhereUniqueInput,
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
}
