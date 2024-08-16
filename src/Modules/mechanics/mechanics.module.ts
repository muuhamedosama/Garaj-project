import { Module } from "@nestjs/common";
import { MechanicsService } from "./mechanics.service";
import { MechanicsController } from "./mechanics.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Mechanic, MechanicSchema } from "./mechanics.schema";
import { UsersModule } from "../users/users.module";
import {  JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Mechanic.name, schema: MechanicSchema },
    ]),
    UsersModule,
    PassportModule
  ],
  controllers: [MechanicsController],
  providers: [MechanicsService, JwtService],
  exports: [MechanicsService],
})
export class MechanicsModule {}
