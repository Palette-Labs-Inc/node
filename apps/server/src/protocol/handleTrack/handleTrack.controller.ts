import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleTrackDto } from './dto/handleTrack.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleTrackService } from './handleTrack.service';

@ApiTags('fulfill')
@Controller()
export class HandleTrackController {
  constructor(private readonly protocolService: HandleTrackService) {}

  @Post('/handleTrack')
  async processProtocol(@Body() dto: HandleTrackDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
