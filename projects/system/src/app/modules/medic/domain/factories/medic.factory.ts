import { Medic, MedicProperties } from '../entities/medic';
import { MedicInputs } from '../inputs/input-medic.type';
import { MedicIdVO } from '../value-objects/medic-id.vo';

export class MedicFactory {
  static create(properties: MedicInputs) {
    const medicIdVO = MedicIdVO.create(properties.medicId);

    if (!properties.name) {
      throw new Error('Medic name is required');
    }

    if (!properties.lastname) {
      throw new Error('Medic lastname is required');
    }

    if (!properties.cmp) {
      throw new Error('Medic cmp is required');
    }

    const medicProperties: MedicProperties = {
      medicId: medicIdVO,
      name: properties.name,
      lastname: properties.lastname,
      cmp: properties.cmp,
      email: properties.email,
      phone: properties.phone,
    };

    return new Medic(medicProperties);
  }
}
