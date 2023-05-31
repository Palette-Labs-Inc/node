import { Module } from "@nestjs/common";
import { BazaarModuleBase } from "./base/bazaar.module.base";
import { BazaarService } from "./bazaar.service";
import { BazaarController } from "./bazaar.controller";
import { BazaarResolver } from "./bazaar.resolver";

@Module({
  imports: [BazaarModuleBase],
  controllers: [BazaarController],
  providers: [BazaarService, BazaarResolver],
  exports: [BazaarService],
})
export class BazaarModule {}
