import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import {HttpClient} from '@angular/common/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login:any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private http: HttpClient) {
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Informe usuário e senha antes de se conectar!',
      duration: 3000,
      position: 'middle'
    });
  toast.present();
  }
  goCadastro(){

     this.navCtrl.push(CadastroPage);
  }

  logar(){
    if(this.login.hasOwnProperty('usuario') &&
       this.login.hasOwnProperty('senha')){

    }else{
      this.presentToast();
    }
  }
    
}
