import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BroadcastDto } from './dtos/broadcast.dto';
import { Wave } from '../interfaces/protocol.interface';
import { BroadcastService } from './broadcast.service';

// TODO - configuration file should have a list of supported actions for this node.
// TODO - these endpoints should derive from the configuration with an equivalent funciton to getConfiguredActions()
// TODO - breakout into unique endpoints
@ApiTags('explore')
@Controller()
export class BroadcastController {
  constructor(private readonly protocolService: BroadcastService) {}

  @Post('/broadcast')
  async processProtocol(@Body() dto: BroadcastDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
