import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RatingDto } from './dto/rating.dto';
import { Wave } from '../interfaces/protocol.interface';
import { RatingService } from './rating.service';

@ApiTags('postFulfill')
@Controller()
export class RateController {
  constructor(private readonly protocolService: RatingService) {}

  @Post('/rating')
  async processProtocol(@Body() dto: RatingDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
