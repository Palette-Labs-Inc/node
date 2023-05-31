import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TrackDto } from './dto/track.dto';
import { Wave } from '../interfaces/protocol.interface';
import { TrackService } from './track.service';

@ApiTags('fulfill')
@Controller()
export class TrackController {
  constructor(private readonly protocolService: TrackService) {}

  @Post('/track')
  async processProtocol(@Body() dto: TrackDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
