import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleQueueModule } from './sample-queue/sample-queue.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    SampleQueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
