import { Injectable } from '@nestjs/common';
import { HandleStatusDto } from './dto/handleStatus.dto';
import { Wave, WaveType } from '../interfaces/wave.interface';

@Injectable()
export class HandleStatusService {
  async protocolHandler(dto: HandleStatusDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleStatusDto) {
    console.log(dto);
  }
}
