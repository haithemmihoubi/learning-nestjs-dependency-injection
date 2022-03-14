import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  computer(a: number, b: number) {
    console.log('drawing 10 whats of power from powerService');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
