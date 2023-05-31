
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HourIntervalService } from "../hourInterval.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HourIntervalCreateInput } from "./HourIntervalCreateInput";
import { HourIntervalWhereInput } from "./HourIntervalWhereInput";
import { HourIntervalWhereUniqueInput } from "./HourIntervalWhereUniqueInput";
import { HourIntervalFindManyArgs } from "./HourIntervalFindManyArgs";
import { HourIntervalUpdateInput } from "./HourIntervalUpdateInput";
import { HourInterval } from "./HourInterval";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HourIntervalControllerBase {
  constructor(
    protected readonly service: HourIntervalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HourInterval })
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: HourIntervalCreateInput
  ): Promise<HourInterval> {
    return await this.service.create({
      data: {
        ...data,

        menus: data.menus
          ? {
              connect: data.menus,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [HourInterval] })
  @ApiNestedQuery(HourIntervalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<HourInterval[]> {
    const args = plainToClass(HourIntervalFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HourInterval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: HourIntervalWhereUniqueInput
  ): Promise<HourInterval | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HourInterval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: HourIntervalWhereUniqueInput,
    @common.Body() data: HourIntervalUpdateInput
  ): Promise<HourInterval | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          menus: data.menus
            ? {
                connect: data.menus,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: HourInterval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: HourIntervalWhereUniqueInput
  ): Promise<HourInterval | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
