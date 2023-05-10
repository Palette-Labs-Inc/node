import { Module } from "@nestjs/common";
import { MenuItemModuleBase } from "./base/menuItem.module.base";
import { MenuItemService } from "./menuItem.service";
import { MenuItemController } from "./menuItem.controller";
import { MenuItemResolver } from "./menuItem.resolver";

@Module({
  imports: [MenuItemModuleBase],
  controllers: [MenuItemController],
  providers: [MenuItemService, MenuItemResolver],
  exports: [MenuItemService],
})
export class MenuItemModule {}
