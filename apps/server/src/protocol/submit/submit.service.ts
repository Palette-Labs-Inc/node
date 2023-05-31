import { Injectable } from '@nestjs/common';
import { SubmitDto } from './dto/submit.dto';
import { Wave, WaveType } from '../interfaces/protocol.interface';

@Injectable()
export class SubmitService {
  async protocolHandler(dto: SubmitDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: SubmitDto) {
    console.log(dto);
  }
}
