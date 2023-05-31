import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleBroadcastDto } from './dto/handleBroadcast.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleBroadcastService } from './handleBroadcast.service';

@ApiTags('explore')
@Controller()
export class HandleBroadcastController {
  constructor(private readonly protocolService: HandleBroadcastService) {}

  @Post('/handleBroadcast')
  async processProtocol(@Body() dto: HandleBroadcastDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
