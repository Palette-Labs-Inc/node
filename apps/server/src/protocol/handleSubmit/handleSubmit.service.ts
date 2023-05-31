import { Injectable } from '@nestjs/common';
import { HandleSubmitDto } from './dto/handleSubmit.dto';
import { Wave, WaveType } from '../interfaces/protocol.interface';

@Injectable()
export class HandleSubmitService {
  async protocolHandler(dto: HandleSubmitDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleSubmitDto) {
    console.log(dto);
  }
}
