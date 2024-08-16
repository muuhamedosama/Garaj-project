import { CreateQouteDto } from './dto/create-qoute.dto';
import { UpdateQouteDto } from './dto/update-qoute.dto';
export declare class QoutesService {
    create(createQouteDto: CreateQouteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQouteDto: UpdateQouteDto): string;
    remove(id: number): string;
}
