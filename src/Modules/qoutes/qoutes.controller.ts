import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QoutesService } from './qoutes.service';
import { CreateQouteDto } from './dto/create-qoute.dto';
import { UpdateQouteDto } from './dto/update-qoute.dto';

@Controller('qoutes')
export class QoutesController {
  constructor(private readonly qoutesService: QoutesService) {}

  @Post()
  create(@Body() createQouteDto: CreateQouteDto) {
    return this.qoutesService.create(createQouteDto);
  }

  @Get()
  findAll() {
    return this.qoutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qoutesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQouteDto: UpdateQouteDto) {
    return this.qoutesService.update(+id, updateQouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qoutesService.remove(+id);
  }
}
