import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SupportDto } from './dto/support.dto';
import { Wave } from '../interfaces/protocol.interface';
import { SupportService } from './support.service';

@ApiTags('fulfill')
@Controller()
export class SupportController {
  constructor(private readonly protocolService: SupportService) {}

  @Post('/support')
  async processProtocol(@Body() dto: SupportDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
