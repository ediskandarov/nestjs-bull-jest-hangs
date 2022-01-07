import { Test, TestingModule } from '@nestjs/testing';
import { SampleQueueService } from './sample-queue.service';

describe('SampleQueueService', () => {
  let service: SampleQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleQueueService],
    }).compile();

    service = module.get<SampleQueueService>(SampleQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
