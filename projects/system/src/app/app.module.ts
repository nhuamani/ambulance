import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicApplication } from './modules/medic/application/medic.application';
import { MedicInfrastructure } from './modules/medic/infrastructure/medic.infrastructure';
import { MedicModule } from './modules/medic/medic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MedicModule],
  providers: [MedicInfrastructure, MedicApplication],
  bootstrap: [AppComponent],
})
export class AppModule {}
