import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModifierGroupServiceBase } from "./base/modifierGroup.service.base";

@Injectable()
export class ModifierGroupService extends ModifierGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
