import { Module } from "@nestjs/common";
import { NodeModuleBase } from "./base/node.module.base";
import { NodeService } from "./node.service";
import { NodeController } from "./node.controller";
import { NodeResolver } from "./node.resolver";

@Module({
  imports: [NodeModuleBase],
  controllers: [NodeController],
  providers: [NodeService, NodeResolver],
  exports: [NodeService],
})
export class NodeModule {}
