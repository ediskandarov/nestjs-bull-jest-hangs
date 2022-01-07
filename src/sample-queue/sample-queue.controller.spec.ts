import { Test, TestingModule } from '@nestjs/testing';
import { SampleQueueController } from './sample-queue.controller';
import { SampleQueueService } from './sample-queue.service';

describe('SampleQueueController', () => {
  let controller: SampleQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleQueueController],
      providers: [SampleQueueService],
    }).compile();

    controller = module.get<SampleQueueController>(SampleQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
