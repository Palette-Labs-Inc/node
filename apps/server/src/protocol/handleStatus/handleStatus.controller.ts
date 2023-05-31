import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleStatusDto } from './dto/handleStatus.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleStatusService } from './handleStatus.service';

@ApiTags('fulfill')
@Controller()
export class HandleStatusController {
  constructor(private readonly protocolService: HandleStatusService) {}

  @Post('/handleStatus')
  async processProtocol(@Body() dto: HandleStatusDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
