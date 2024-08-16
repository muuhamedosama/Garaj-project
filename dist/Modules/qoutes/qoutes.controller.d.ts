import { QoutesService } from './qoutes.service';
import { CreateQouteDto } from './dto/create-qoute.dto';
import { UpdateQouteDto } from './dto/update-qoute.dto';
export declare class QoutesController {
    private readonly qoutesService;
    constructor(qoutesService: QoutesService);
    create(createQouteDto: CreateQouteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQouteDto: UpdateQouteDto): string;
    remove(id: string): string;
}
