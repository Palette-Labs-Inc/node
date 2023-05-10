
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ConditionService } from "../condition.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ConditionCreateInput } from "./ConditionCreateInput";
import { ConditionWhereInput } from "./ConditionWhereInput";
import { ConditionWhereUniqueInput } from "./ConditionWhereUniqueInput";
import { ConditionFindManyArgs } from "./ConditionFindManyArgs";
import { ConditionUpdateInput } from "./ConditionUpdateInput";
import { Condition } from "./Condition";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ConditionControllerBase {
  constructor(
    protected readonly service: ConditionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Condition })
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ConditionCreateInput): Promise<Condition> {
    return await this.service.create({
      data: {
        ...data,

        location: {
          connect: data.location,
        },
      },
      select: {
        bsnId: true,
        bsnUrl: true,
        createdAt: true,
        csnId: true,
        csnUrl: true,
        id: true,
        industryCode: true,

        location: {
          select: {
            id: true,
          },
        },

        messageId: true,
        method: true,
        publicKey: true,
        ssnId: true,
        ssnUrl: true,
        timeToLive: true,
        transactionId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Condition] })
  @ApiNestedQuery(ConditionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Condition[]> {
    const args = plainToClass(ConditionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        bsnId: true,
        bsnUrl: true,
        createdAt: true,
        csnId: true,
        csnUrl: true,
        id: true,
        industryCode: true,

        location: {
          select: {
            id: true,
          },
        },

        messageId: true,
        method: true,
        publicKey: true,
        ssnId: true,
        ssnUrl: true,
        timeToLive: true,
        transactionId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Condition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ConditionWhereUniqueInput
  ): Promise<Condition | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        bsnId: true,
        bsnUrl: true,
        createdAt: true,
        csnId: true,
        csnUrl: true,
        id: true,
        industryCode: true,

        location: {
          select: {
            id: true,
          },
        },

        messageId: true,
        method: true,
        publicKey: true,
        ssnId: true,
        ssnUrl: true,
        timeToLive: true,
        transactionId: true,
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
  @swagger.ApiOkResponse({ type: Condition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ConditionWhereUniqueInput,
    @common.Body() data: ConditionUpdateInput
  ): Promise<Condition | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          location: {
            connect: data.location,
          },
        },
        select: {
          bsnId: true,
          bsnUrl: true,
          createdAt: true,
          csnId: true,
          csnUrl: true,
          id: true,
          industryCode: true,

          location: {
            select: {
              id: true,
            },
          },

          messageId: true,
          method: true,
          publicKey: true,
          ssnId: true,
          ssnUrl: true,
          timeToLive: true,
          transactionId: true,
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
  @swagger.ApiOkResponse({ type: Condition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ConditionWhereUniqueInput
  ): Promise<Condition | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          bsnId: true,
          bsnUrl: true,
          createdAt: true,
          csnId: true,
          csnUrl: true,
          id: true,
          industryCode: true,

          location: {
            select: {
              id: true,
            },
          },

          messageId: true,
          method: true,
          publicKey: true,
          ssnId: true,
          ssnUrl: true,
          timeToLive: true,
          transactionId: true,
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
