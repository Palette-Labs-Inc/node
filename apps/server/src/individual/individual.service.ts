import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndividualServiceBase } from "./base/individual.service.base";

@Injectable()
export class IndividualService extends IndividualServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
