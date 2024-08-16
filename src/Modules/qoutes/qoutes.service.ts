import { Injectable } from '@nestjs/common';
import { CreateQouteDto } from './dto/create-qoute.dto';
import { UpdateQouteDto } from './dto/update-qoute.dto';

@Injectable()
export class QoutesService {
  create(createQouteDto: CreateQouteDto) {
    return 'This action adds a new qoute';
  }

  findAll() {
    return `This action returns all qoutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qoute`;
  }

  update(id: number, updateQouteDto: UpdateQouteDto) {
    return `This action updates a #${id} qoute`;
  }

  remove(id: number) {
    return `This action removes a #${id} qoute`;
  }
}
