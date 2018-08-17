import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumoPage } from './consumo';

@NgModule({
  declarations: [
    ConsumoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumoPage),
  ],
})
export class ConsumoPageModule {}
