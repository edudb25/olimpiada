import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CadastroPage} from '../pages/cadastro/cadastro';
import {MeuPerfilPage} from '../pages/meu-perfil/meu-perfil';
import {RankingPage} from '../pages/ranking/ranking';
import {InformativoPage} from '../pages/informativo/informativo';
import {ConsumoPage} from '../pages/consumo/consumo';
import {LoginPage} from '../pages/login/login';
import {QuemSomosPage} from '../pages/quem-somos/quem-somos'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: "Cadastro" , component:CadastroPage},
      {title: "Meu Perfil" , component:MeuPerfilPage},
      {title: "Ranking" , component:RankingPage},
      {title: "Informativo" , component:InformativoPage},
      {title: "Consumo" , component:ConsumoPage},
      //{title: "Login" , component:LoginPage},
      {title: "Quem Somos" , component:QuemSomosPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
