import { Module } from '@nestjs/common';
import { SampleQueueService } from './sample-queue.service';
import { SampleQueueController } from './sample-queue.controller';
import { BullModule } from '@nestjs/bull';
import { AudioProcessor } from './sample-queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    })
  ],
  controllers: [SampleQueueController],
  providers: [SampleQueueService, AudioProcessor]
})
export class SampleQueueModule {}
