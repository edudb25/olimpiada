import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

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

categorias: any = [
  {id: 1, nome: 'carregando'},
];
residuos: any = [
  {id: 1, nome: 'Escolha uma categoria'},
];

consumo: any = {};    

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: HttpClient,
              private toastCtrl: ToastController  ) {

              http.get('http://mytrash.com.br/app/?tipo=listarcategorias').subscribe(retorno => {
                  this.categorias = retorno;
                  console.log(retorno);
              }); 
  }
   presentToast(mensagem, position) {
     let toast = this.toastCtrl.create({
       message: mensagem,
       duration: 3000,
       position: position

     });

     toast.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumoPage');
  }

  carregarResiduos(){
    let categoria = this.consumo.categoria;
    console.log(this.consumo);
    this.http.get('http://mytrash.com.br/app/?tipo=listarresiduos&categoria_id='+categoria).subscribe(retorno => {
      this.residuos = retorno;
      console.log(retorno);
    });
  }

  salvarConsumo(){
    let pessoa = JSON.parse(localStorage.getItem('usuario'));
    this.consumo.pessoa = pessoa.id;
    if( (this.consumo.hasOwnProperty('quantidade') && this.consumo.quantidade !== null) && 
        (this.consumo.hasOwnProperty('residuo') || this.consumo.residuo !== null) ){
      
        this.http.post('http://mytrash.com.br/app/?tipo=inserirconsumo', this.consumo, {
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
        }).subscribe((retorno: any) => {
          console.log(retorno);
          if( retorno.ok ){
            this.presentToast('Consumo computado com sucesso, preencha novamente para adicionar mais!', 'middle');
            this.consumo.categoria = null;
            this.consumo.residuo = null;
            this.consumo.quantidade = null;
          }else{
          }
        }, (error)=>{
          console.log(error);
        });
      }else{
        this.presentToast('Informe categoria, resíduo e quantidade antes de adicionar!', 'middle');
      }

  }  
}


