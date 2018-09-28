import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

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

  pessoa:any = {nome:"Eduardo"};

  pessoas: any
   constructor(public navCtrl: NavController, public httpClient: HttpClient) { 
    
   }

  ionViewDidLoad() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(result => this.pessoas=result)

     
  }



}
