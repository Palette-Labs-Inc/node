import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CancelDto } from './dto/cancel.dto';
import { Wave } from '../interfaces/protocol.interface';
import { CancelService } from './cancel.service';

@ApiTags('fulfill')
@Controller()
export class CancelController {
  constructor(private readonly protocolService: CancelService) {}

  @Post('/cancel')
  async processProtocol(@Body() dto: CancelDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
