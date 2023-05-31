import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleSubmitDto } from './dto/handleSubmit.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleSubmitService } from './handleSubmit.service';

@ApiTags('purchase')
@Controller()
export class HandleSubmitController {
  constructor(private readonly protocolService: HandleSubmitService) {}

  @Post('/handleSubmit')
  async processProtocol(@Body() dto: HandleSubmitDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
