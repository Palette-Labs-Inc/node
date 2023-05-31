import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleCancelDto } from './dto/handleCancel.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleCancelService } from './handleCancel.service';

@ApiTags('postFulfill')
@Controller()
export class HandleCancelController {
  constructor(private readonly protocolService: HandleCancelService) {}

  @Post('/handleCancel')
  async processProtocol(@Body() dto: HandleCancelDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
