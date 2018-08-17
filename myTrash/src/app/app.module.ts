import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CadastroPage} from '../pages/cadastro/cadastro';
import {MeuPerfilPage} from '../pages/meu-perfil/meu-perfil';
import {RankingPage} from '../pages/ranking/ranking';
import {InformativoPage} from '../pages/informativo/informativo';
import {ConsumoPage} from '../pages/consumo/consumo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    MeuPerfilPage,
    RankingPage,
    InformativoPage,
    ConsumoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    MeuPerfilPage,
    RankingPage,
    InformativoPage,
    ConsumoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}