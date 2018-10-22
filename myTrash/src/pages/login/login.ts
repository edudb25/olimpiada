import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
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
  presentToast( mensagem, position ) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: position
    });
  toast.present();
  }
  goCadastro(){
     this.navCtrl.push(CadastroPage);
  }

  logar(){
    console.log(this.login);
    if(this.login.hasOwnProperty('email') &&
       this.login.hasOwnProperty('senha')){
        this.http.post('http://mytrash.com.br/app/?tipo=login', this.login, {
          headers:
          {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
            'Content-Type':'application/json',
            'Accept':'application/json'
          }
        }).subscribe((retorno:any) => {
          console.log(retorno);

          if(retorno.hasOwnProperty('msg')){
            this.presentToast(retorno.msg, 'middle'); 
          } else if(retorno[0].id>0){

            this.presentToast('Login efetuado com sucesso!', 'middle');
            this.navCtrl.setRoot(HomePage);
          }
           console.log(retorno)         
        });
    }else{
      this.presentToast('Preencha usuário e senha corretamente!', 'middle');
    }
  }
    
}
