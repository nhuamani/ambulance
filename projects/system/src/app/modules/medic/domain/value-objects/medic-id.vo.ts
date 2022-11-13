import { validate } from 'uuid';

export class MedicIdVO {
  private medicId: string;
  private constructor(medicId: string) {
    this.medicId = medicId;
  }

  static create(medicId: string) {
    if (!medicId || !validate(medicId)) {
      throw new Error('MedicId is required');
    }

    return new MedicIdVO(medicId);
  }

  get value() {
    return this.medicId;
  }
}
