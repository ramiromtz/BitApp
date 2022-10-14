import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocoverPassPageRoutingModule } from './rocover-pass-routing.module';

import { RocoverPassPage } from './rocover-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocoverPassPageRoutingModule
  ],
  declarations: [RocoverPassPage]
})
export class RocoverPassPageModule {}
