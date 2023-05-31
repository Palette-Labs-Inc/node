
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RatingService } from "../rating.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RatingCreateInput } from "./RatingCreateInput";
import { RatingWhereInput } from "./RatingWhereInput";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingUpdateInput } from "./RatingUpdateInput";
import { Rating } from "./Rating";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { MediaFileFindManyArgs } from "../../mediaFile/base/MediaFileFindManyArgs";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { MediaFileWhereUniqueInput } from "../../mediaFile/base/MediaFileWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RatingControllerBase {
  constructor(
    protected readonly service: RatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rating })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: RatingCreateInput): Promise<Rating> {
    return await this.service.create({
      data: {
        ...data,

        courier: data.courier
          ? {
              connect: data.courier,
            }
          : undefined,

        seller: data.seller
          ? {
              connect: data.seller,
            }
          : undefined,
      },
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        entity: true,
        entityId: true,
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Rating] })
  @ApiNestedQuery(RatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Rating[]> {
    const args = plainToClass(RatingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        entity: true,
        entityId: true,
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        entity: true,
        entityId: true,
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() data: RatingUpdateInput
  ): Promise<Rating | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          courier: data.courier
            ? {
                connect: data.courier,
              }
            : undefined,

          seller: data.seller
            ? {
                connect: data.seller,
              }
            : undefined,
        },
        select: {
          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          entity: true,
          entityId: true,
          id: true,

          seller: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          entity: true,
          entityId: true,
          id: true,

          seller: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          value: true,
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
  @common.Get("/:id/images")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findManyImages(
    @common.Req() request: Request,
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findImages(params.id, {
      ...query,
      select: {
        createdAt: true,
        height: true,
        id: true,

        individuals: {
          select: {
            id: true,
          },
        },

        menuItem: {
          select: {
            id: true,
          },
        },

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
        width: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async connectImages(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async updateImages(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async disconnectImages(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
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
  @common.Get("/:id/media")
  @ApiNestedQuery(MediaFileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  async findManyMedia(
    @common.Req() request: Request,
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<MediaFile[]> {
    const query = plainToClass(MediaFileFindManyArgs, request.query);
    const results = await this.service.findMedia(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        mimeType: true,

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/media")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async connectMedia(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() body: MediaFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      media: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/media")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async updateMedia(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() body: MediaFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      media: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/media")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async disconnectMedia(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() body: MediaFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      media: {
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
