import { Component, Inject, OnInit } from '@angular/core';

import { MedicResponseDto } from '../../../application/dtos/medic.response.dto';
import { MedicApplication } from '../../../application/medic.application';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  listMedics: MedicResponseDto[] = [];

  constructor(
    @Inject(MedicApplication) private application:MedicApplication
  ) {}

  async ngOnInit() {
    this.listMedics = await this.application.listMedics();
    console.log(this.listMedics);
  }
}
