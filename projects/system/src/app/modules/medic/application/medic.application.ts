import { Inject, Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { MedicFactory } from '../domain/factories/medic.factory';
import { MedicInputs } from '../domain/inputs/input-medic.type';
import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicApplication {
  constructor(
    @Inject(MedicInfrastructure) private readonly repository: MedicRepository
  ) {}

  async createMedic(
    name: string,
    lastname: string,
    cmp: string,
    phone: string,
    email: string
  ): Promise<void> {
    const medicId = uuidv4();
    const inputs: MedicInputs = {
      medicId,
      name,
      lastname,
      cmp,
      phone,
      email,
    };

    const medic = MedicFactory.create(inputs);

    await this.repository.save(medic);
  }

  async listMedics() {
    const listMedics = await this.repository.getAll();
    return listMedics;
  }
}
