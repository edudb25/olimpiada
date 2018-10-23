import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient  } from '@angular/common/http';

/**
 * Generated class for the MeuPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meu-perfil',
  templateUrl: 'meu-perfil.html',
})
export class MeuPerfilPage {

  pessoa:any = {};

  constructor(public navCtrl: NavController, public http: HttpClient) { 
    this.pessoa = JSON.parse(localStorage.getItem('usuario'));
    let url = 'http://mytrash.com.br/?tipo=listarconsumo&pessoa_id='+this.pessoa.id; 
    http.get(url).subscribe( retorno => {
      console.log(retorno);
    });
  }

  ionViewDidLoad() {
    
  }



}
