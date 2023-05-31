
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuService } from "../menu.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuCreateInput } from "./MenuCreateInput";
import { MenuWhereInput } from "./MenuWhereInput";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";
import { MenuFindManyArgs } from "./MenuFindManyArgs";
import { MenuUpdateInput } from "./MenuUpdateInput";
import { Menu } from "./Menu";
import { HourIntervalFindManyArgs } from "../../hourInterval/base/HourIntervalFindManyArgs";
import { HourInterval } from "../../hourInterval/base/HourInterval";
import { HourIntervalWhereUniqueInput } from "../../hourInterval/base/HourIntervalWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuControllerBase {
  constructor(
    protected readonly service: MenuService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Menu })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MenuCreateInput): Promise<Menu> {
    return await this.service.create({
      data: {
        ...data,

        seller: {
          connect: data.seller,
        },
      },
      select: {
        categoryIDs: true,
        createdAt: true,
        fulfillmentModes: true,
        id: true,
        name: true,

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
  @swagger.ApiOkResponse({ type: [Menu] })
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Menu[]> {
    const args = plainToClass(MenuFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        categoryIDs: true,
        createdAt: true,
        fulfillmentModes: true,
        id: true,
        name: true,

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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<Menu | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        categoryIDs: true,
        createdAt: true,
        fulfillmentModes: true,
        id: true,
        name: true,

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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() data: MenuUpdateInput
  ): Promise<Menu | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          seller: {
            connect: data.seller,
          },
        },
        select: {
          categoryIDs: true,
          createdAt: true,
          fulfillmentModes: true,
          id: true,
          name: true,

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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<Menu | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          categoryIDs: true,
          createdAt: true,
          fulfillmentModes: true,
          id: true,
          name: true,

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
  @common.Get("/:id/hourIntervals")
  @ApiNestedQuery(HourIntervalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "any",
  })
  async findManyHourIntervals(
    @common.Req() request: Request,
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<HourInterval[]> {
    const query = plainToClass(HourIntervalFindManyArgs, request.query);
    const results = await this.service.findHourIntervals(params.id, {
      ...query,
      select: {
        createdAt: true,
        days: true,
        fromHour: true,
        fromMinute: true,
        id: true,

        menus: {
          select: {
            id: true,
          },
        },

        toHour: true,
        toMinute: true,
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

  @common.Post("/:id/hourIntervals")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async connectHourIntervals(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: HourIntervalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hourIntervals: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hourIntervals")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async updateHourIntervals(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: HourIntervalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hourIntervals: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hourIntervals")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async disconnectHourIntervals(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: HourIntervalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hourIntervals: {
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
