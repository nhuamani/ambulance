import { Medic } from '../domain/entities/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';

export class MedicInfrastructure implements MedicRepository {
  save(medic: Medic): Promise<void> {
    console.log('Medic saved', medic);
    return Promise.resolve();
  }
}
