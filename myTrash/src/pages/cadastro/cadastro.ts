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

  series: any = [
    { id: 1, serie:'1º ano', turma: 'A'},
    { id: 2, serie:'2º ano', turma: 'A'},
    { id: 3, serie:'3º ano', turma: 'A'},
    { id: 4, serie:'6º ano', turma: 'A'},
    { id: 5, serie:'7º ano', turma: 'A'},
    { id: 6, serie:'8º ano', turma: 'A'},
    { id: 7, serie:'9º ano', turma: 'A'},
    { id: 8, serie:'1º ano', turma: 'B'},
    { id: 9, serie:'3º ano', turma: 'B'},
    { id: 10, serie:'6º ano', turma: 'B'},
    { id: 11, serie:'7º ano', turma: 'B'},
    { id: 12, serie:'8º ano', turma: 'B'},
    { id: 13, serie:'9º ano', turma: 'B'},
    { id: 14, serie:'Outros', turma:''}
  ];

  pessoa:any = {}; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toastCtrl: ToastController,
              private http: HttpClient) {
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
              }
          });
    }else{
      this.presentToast('Preencha o formulário corretamente!', 'middle');
    }
  }
}
