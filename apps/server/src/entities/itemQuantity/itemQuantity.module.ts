import { Module } from "@nestjs/common";
import { ItemQuantityModuleBase } from "./base/itemQuantity.module.base";
import { ItemQuantityService } from "./itemQuantity.service";
import { ItemQuantityController } from "./itemQuantity.controller";
import { ItemQuantityResolver } from "./itemQuantity.resolver";

@Module({
  imports: [ItemQuantityModuleBase],
  controllers: [ItemQuantityController],
  providers: [ItemQuantityService, ItemQuantityResolver],
  exports: [ItemQuantityService],
})
export class ItemQuantityModule {}
