
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ModifierGroupService } from "../modifierGroup.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ModifierGroupCreateInput } from "./ModifierGroupCreateInput";
import { ModifierGroupWhereInput } from "./ModifierGroupWhereInput";
import { ModifierGroupWhereUniqueInput } from "./ModifierGroupWhereUniqueInput";
import { ModifierGroupFindManyArgs } from "./ModifierGroupFindManyArgs";
import { ModifierGroupUpdateInput } from "./ModifierGroupUpdateInput";
import { ModifierGroup } from "./ModifierGroup";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ModifierGroupControllerBase {
  constructor(
    protected readonly service: ModifierGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ModifierGroup })
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ModifierGroupCreateInput
  ): Promise<ModifierGroup> {
    return await this.service.create({
      data: {
        ...data,

        sellerModifierGroups: data.sellerModifierGroups
          ? {
              connect: data.sellerModifierGroups,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        maximumPerModifierSelectionQuantity: true,
        maximumSelections: true,
        menuItemIDs: true,
        minimumSelections: true,

        sellerModifierGroups: {
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
  @swagger.ApiOkResponse({ type: [ModifierGroup] })
  @ApiNestedQuery(ModifierGroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<ModifierGroup[]> {
    const args = plainToClass(ModifierGroupFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        maximumPerModifierSelectionQuantity: true,
        maximumSelections: true,
        menuItemIDs: true,
        minimumSelections: true,

        sellerModifierGroups: {
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
  @swagger.ApiOkResponse({ type: ModifierGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ModifierGroupWhereUniqueInput
  ): Promise<ModifierGroup | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        maximumPerModifierSelectionQuantity: true,
        maximumSelections: true,
        menuItemIDs: true,
        minimumSelections: true,

        sellerModifierGroups: {
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
  @swagger.ApiOkResponse({ type: ModifierGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ModifierGroupWhereUniqueInput,
    @common.Body() data: ModifierGroupUpdateInput
  ): Promise<ModifierGroup | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          sellerModifierGroups: data.sellerModifierGroups
            ? {
                connect: data.sellerModifierGroups,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          maximumPerModifierSelectionQuantity: true,
          maximumSelections: true,
          menuItemIDs: true,
          minimumSelections: true,

          sellerModifierGroups: {
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
  @swagger.ApiOkResponse({ type: ModifierGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ModifierGroupWhereUniqueInput
  ): Promise<ModifierGroup | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          maximumPerModifierSelectionQuantity: true,
          maximumSelections: true,
          menuItemIDs: true,
          minimumSelections: true,

          sellerModifierGroups: {
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
}
