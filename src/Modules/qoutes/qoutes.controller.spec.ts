import { Test, TestingModule } from '@nestjs/testing';
import { QoutesController } from './qoutes.controller';
import { QoutesService } from './qoutes.service';

describe('QoutesController', () => {
  let controller: QoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QoutesController],
      providers: [QoutesService],
    }).compile();

    controller = module.get<QoutesController>(QoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
