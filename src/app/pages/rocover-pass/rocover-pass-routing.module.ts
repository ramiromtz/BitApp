import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocoverPassPage } from './rocover-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RocoverPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocoverPassPageRoutingModule {}
