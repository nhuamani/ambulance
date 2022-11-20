import { MedicResponseDto } from "../../application/dtos/medic.response.dto";
import { Medic } from "../entities/medic";

export interface MedicRepository {
    save(medic: Medic): Promise<void>;
      getAll(): Promise<MedicResponseDto[]>;
}