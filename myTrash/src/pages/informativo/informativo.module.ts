import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformativoPage } from './informativo';

@NgModule({
  declarations: [
    InformativoPage,
  ],
  imports: [
    IonicPageModule.forChild(InformativoPage),
  ],
})
export class InformativoPageModule {}
