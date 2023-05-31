import { Injectable } from '@nestjs/common';
import { HandleRateDto } from './dto/handleRating.dto';
import { Wave, WaveType } from '../interfaces/wave.interface';

@Injectable()
export class HandleRateService {
  async protocolHandler(dto: HandleRateDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleRateDto) {
    console.log(dto);
  }
}
