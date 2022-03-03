import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempoPage } from './tempo.page';

const routes: Routes = [
  {
    path: '',
    component: TempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempoPageRoutingModule {}
