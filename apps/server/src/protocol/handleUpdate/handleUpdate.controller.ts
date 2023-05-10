import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleUpdateDto } from './dto/handleUpdate.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleUpdateService } from './handleUpdate.service';

@ApiTags('fulfill')
@Controller()
export class HandleUpdateController {
  constructor(private readonly protocolService: HandleUpdateService) {}

  @Post('/handleUpdate')
  async processProtocol(@Body() dto: HandleUpdateDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
