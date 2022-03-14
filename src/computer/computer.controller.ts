import { Controller, Get } from "@nestjs/common";
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private Cpuservice: CpuService,
    private diskService: DiskService,
  ) {}
  @Get()
  run() {
    return [this.Cpuservice.computer(10, 11), this.diskService.getData()];
  }
}
