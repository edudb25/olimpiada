import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consumo',
  templateUrl: 'consumo.html',
})
export class ConsumoPage {

residuos: any = [
{id: 1, residuo: 'Plástico'},
{id: 2, residuo: 'Garrafa Pet'},
{id: 3, residuo: 'Lata de alumínio'},
{id: 4, residuo: 'Papel'},
{id: 5, residuo: 'Vidro'}
];

consumo: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumoPage');
  }

}
