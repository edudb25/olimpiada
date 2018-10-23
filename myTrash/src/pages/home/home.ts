import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsumoPage } from '../consumo/consumo';
import { MeuPerfilPage } from '../meu-perfil/meu-perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  pessoa: any = {};
  constructor(public navCtrl: NavController) {
    this.pessoa=JSON.parse(localStorage.getItem('usuario'));

  }

  goConsumo(){
     this.navCtrl.push(ConsumoPage); 
  }

  goPerfil(){
    this.navCtrl.push(MeuPerfilPage); 
 }

}
