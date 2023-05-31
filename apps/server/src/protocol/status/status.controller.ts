import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatusDto } from './dto/status.dto';
import { Wave } from '../interfaces/protocol.interface';
import { StatusService } from './status.service';

@ApiTags('fulfill')
@Controller()
export class StatusController {
  constructor(private readonly protocolService: StatusService) {}

  @Post('/status')
  async processProtocol(@Body() dto: StatusDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
