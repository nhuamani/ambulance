import { Component, Inject, OnInit } from '@angular/core';
import { MedicApplication } from '../../../application/medic.aplication';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(
    @Inject(MedicApplication) private application:MedicApplication
  ) {}

  async ngOnInit() {
    const listMedics = await this.application.listMedics();
    console.log(listMedics);
  }
}
