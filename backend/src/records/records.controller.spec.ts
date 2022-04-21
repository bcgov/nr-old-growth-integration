import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RecordsService } from './records.service';
import { Records } from './entities/records.entity';
import { RecordsController } from './records.controller';

describe('RecordsController', () => {
  let controller: RecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordsController],
      providers: [
        RecordsService,
        {
          provide: getRepositoryToken(Records),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<RecordsController>(RecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
