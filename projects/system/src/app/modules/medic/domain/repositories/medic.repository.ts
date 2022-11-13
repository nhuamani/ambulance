import { Medic } from "../entities/medic";

export interface MedicRepository {
    save(medic: Medic): Promise<void>;
}