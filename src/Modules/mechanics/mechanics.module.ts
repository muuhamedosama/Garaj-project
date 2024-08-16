import { Module } from '@nestjs/common';
import { MechanicsService } from './mechanics.service';
import { MechanicsController } from './mechanics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mechanic, MechanicSchema } from './mechanics.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Mechanic.name, schema: MechanicSchema },
    ]),
    UsersModule
  ],
  controllers: [MechanicsController],
  providers: [MechanicsService],
  exports: [MechanicsService],
})
export class MechanicsModule {}
