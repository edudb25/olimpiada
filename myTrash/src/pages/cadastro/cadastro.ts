import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  turmas: any = [
    { id: null, nome:'carregando', serie: null}
  ];

  pessoa:any = {}; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toastCtrl: ToastController,
              private http: HttpClient) {

                http.get('http://mytrash.com.br/app/?tipo=listarseries').subscribe(retorno => {
                    this.turmas = retorno;
                });
                 
  }
  presentToast(mensagem, position) {
  let toast = this.toastCtrl.create({
    message: mensagem,
    duration: 3000,
    position: position

  });

  toast.onDidDismiss(() => {
    console.log('');
  });

  toast.present();
}


  ionViewDidLoad() {
  }
  salvar() {
    if( this.pessoa.hasOwnProperty('nome') && 
        this.pessoa.hasOwnProperty('serie') &&
        this.pessoa.hasOwnProperty('email') && 
        this.pessoa.hasOwnProperty('senha') &&
        this.pessoa.hasOwnProperty('dtnascimento')) {
        console.log(this.pessoa);  
          this.http.post('http://mytrash.com.br/app/?tipo=cadastro', this.pessoa,  {
            headers:
            {
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).subscribe((retorno:any) => {
              console.log(retorno);
              if( retorno.ok ){
                this.presentToast('Cadastro realizado com sucesso!', 'top');
                this.navCtrl.push(LoginPage);
              }else if(retorno[0].indexOf('Duplicate entry')){
                this.presentToast('O email já está em uso', 'middle');
              }
          });
    }else{
      this.presentToast('Preencha o formulário corretamente!', 'middle');
    }
  }
}
