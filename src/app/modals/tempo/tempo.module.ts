import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempoPageRoutingModule } from './tempo-routing.module';

import { TempoPage } from './tempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempoPageRoutingModule
  ],
  declarations: [TempoPage]
})
export class TempoPageModule {}
