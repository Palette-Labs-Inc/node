import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BroadcastDto } from './dto/broadcast.dto';
import { Wave } from '../interfaces/protocol.interface';
import { BroadcastService } from './broadcast.service';

@ApiTags('explore')
@Controller()
export class BroadcastController {
  constructor(private readonly protocolService: BroadcastService) {}

  @Post('/broadcast')
  async processProtocol(@Body() dto: BroadcastDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
