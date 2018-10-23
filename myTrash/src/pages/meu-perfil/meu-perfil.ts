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
  descartes:any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private http: HttpClient) { 
    
                this.pessoa = JSON.parse(localStorage.getItem('usuario'));
    
    
    http.get('http://mytrash.com.br/app/?tipo=listarconsumo&pessoa_id='+this.pessoa.id).subscribe(retorno => {
      console.log(retorno);
      this.descartes = this.formatardescartes(retorno);
      console.log(this.descartes);
    });
  }

  ionViewDidLoad() {
    
  }


  // Metodo altamente complexo 
  // Tem que estudar muito
  private formatardescartes(dados){
    let residuos = [];
    let resultados = [];

    for (var descarte of dados) {
      let position = residuos.indexOf(descarte.residuo);
      
      if(position == -1){
        residuos.push(descarte.residuo);     
        resultados.push({ residuo: descarte.residuo, 
                          quantidade: parseFloat(descarte.quantidade),
                          pontos: parseInt(descarte.pontos)});
      }else{
        for(var r of resultados){
          if(r.residuo == residuos[position]){
             r.quantidade = (r.quantidade + parseFloat(descarte.quantidade));
             r.pontos     = (r.pontos + parseInt(descarte.pontos));
          }
        }
      }

    }
    
    return resultados;
  }

}
