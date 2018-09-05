import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    /*
    var pessoa  = 'Daniel'; //String 
    var idade   = 33;// Inteiro or numeric
    var fumante  = true;// booleano 
    var valorNaConta = 452.65;// float 
    */
    var objeto = {pessoa:'Daniel',idade:33,fumante:false,valorNaConta:456.98};

    console.log(objeto);
  }

}
