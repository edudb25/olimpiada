import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaNovaPage } from './pagina-nova';

@NgModule({
  declarations: [
    PaginaNovaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaNovaPage),
  ],
})
export class PaginaNovaPageModule {}
