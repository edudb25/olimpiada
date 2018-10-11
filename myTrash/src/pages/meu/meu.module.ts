import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeuPage } from './meu';

@NgModule({
  declarations: [
    MeuPage,
  ],
  imports: [
    IonicPageModule.forChild(MeuPage),
  ],
})
export class MeuPageModule {}
