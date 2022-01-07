import { Controller } from '@nestjs/common';
import { SampleQueueService } from './sample-queue.service';

@Controller()
export class SampleQueueController {
  constructor(private readonly sampleQueueService: SampleQueueService) {}
}
