import { Module } from '@nestjs/common';
import { SampleQueueService } from './sample-queue.service';
import { SampleQueueController } from './sample-queue.controller';

@Module({
  controllers: [SampleQueueController],
  providers: [SampleQueueService]
})
export class SampleQueueModule {}
