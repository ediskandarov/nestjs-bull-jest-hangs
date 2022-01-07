import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleQueueModule } from './sample-queue/sample-queue.module';

@Module({
  imports: [SampleQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
