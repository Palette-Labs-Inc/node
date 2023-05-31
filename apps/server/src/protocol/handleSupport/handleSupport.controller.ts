import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleSupportDto } from './dto/handleSupport.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleSupportService } from './handleSupport.service';

@ApiTags('postFulfill')
@Controller()
export class HandleSupportController {
  constructor(private readonly protocolService: HandleSupportService) {}

  @Post('/handleSupport')
  async processProtocol(@Body() dto: HandleSupportDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
