import { MedicIdVO } from '../value-objects/medic-id.vo';

export interface MedicEssential {
  medicId: MedicIdVO;
  name: string;
  lastname: string;
  cmp: string;
}

export interface MedicOptional {
  email: string;
  phone: string;
}

export type MedicProperties = Required<MedicEssential> & Partial<MedicOptional>;

export class Medic {
  private readonly medicId: MedicIdVO;
  private name: string;
  private lastname: string;
  private email: string;
  private phone: string;
  private cmp: string;

  constructor(properties: MedicProperties) {
    Object.assign(this, properties);
  }

  properties() {
    return {
        medicId: this.medicId.value,
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        cmp: this.cmp
    }
  }
}
