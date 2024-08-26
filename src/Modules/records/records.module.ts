import { Module } from "@nestjs/common";
import { RecordsService } from "./records.service";
import { RecordsController } from "./records.controller";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { Record, RecordSchema } from "./records.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }]),
  ],
  controllers: [RecordsController],
  providers: [JwtService, RecordsService],
})
export class RecordsModule {}
