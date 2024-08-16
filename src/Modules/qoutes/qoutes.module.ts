import { Module } from '@nestjs/common';
import { QoutesService } from './qoutes.service';
import { QoutesController } from './qoutes.controller';

@Module({
  controllers: [QoutesController],
  providers: [QoutesService],
})
export class QoutesModule {}
