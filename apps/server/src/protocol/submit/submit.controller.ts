import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubmitDto } from './dto/submit.dto';
import { Wave } from '../interfaces/protocol.interface';
import { SubmitService } from './submit.service';

@ApiTags('purchase')
@Controller()
export class SubmitController {
  constructor(private readonly protocolService: SubmitService) {}

  @Post('/submit')
  async processProtocol(@Body() dto: SubmitDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
