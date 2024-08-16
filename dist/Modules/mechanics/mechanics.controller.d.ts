import { MechanicsService } from "./mechanics.service";
import { UpdateMechanicDto } from "./dto/update-mechanic.dto";
export declare class MechanicsController {
    private readonly mechanicsService;
    constructor(mechanicsService: MechanicsService);
    update(id: string, updateMechanicDto: UpdateMechanicDto, req: any): Promise<{
        message: string;
        data: string;
    }>;
}
