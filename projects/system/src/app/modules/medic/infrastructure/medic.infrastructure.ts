import { Medic } from '../domain/entities/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicIdVO } from '../domain/value-objects/medic-id.vo';

export class MedicInfrastructure implements MedicRepository {
  getAll(): Promise<Medic[]> {
    const listMedics = [
      new Medic({
        medicId: MedicIdVO.create('280a4ff4-5d09-4288-b982-1e67058b258f'),
        name: 'Juan',
        lastname: 'Perez',
        cmp: '123456',
        email: 'correo@correo.com',
        phone: '123456789',
      }),

      new Medic({
        medicId: MedicIdVO.create('ec6ad5ad-2257-4c19-93ec-9055f6c32690'),
        name: 'Carlos',
        lastname: 'Santos',
        cmp: '123456',
        email: 'correo2@correo.com',
        phone: '123456789',
      }),
    ];
    console.log('Medic list');
    return Promise.resolve(listMedics);
  }
  save(medic: Medic): Promise<void> {
    console.log('Medic saved', medic);
    return Promise.resolve();
  }
}
