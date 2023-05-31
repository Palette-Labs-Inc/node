import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScalarServiceBase } from "./base/scalar.service.base";

@Injectable()
export class ScalarService extends ScalarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
